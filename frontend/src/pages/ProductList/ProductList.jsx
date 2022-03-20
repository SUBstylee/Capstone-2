import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Table,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import {listProducts,deleteProduct,createProduct} from '../../actions/productActions';
import { PRODUCT_CREATE_RESET } from "../../constants/productConstants";
import Paginate from "../../components/Paginate/Paginate";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

const ProductList = () => {
    const dispatch=useDispatch();
    const productList=useSelector(state=>state.productList);
    const {loading,error,products,page,pages}=productList;
    const productDelete=useSelector(state=>state.productDelete);
    const {loading:loadingDelete,error:errorDelete,success:successDelete}=productDelete;
    const productCreate=useSelector(state=>state.productCreate);
    const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdProduct}=productCreate;
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo}=userLogin;
    const navigate=useNavigate();
    const params=useParams();
    const pageNumber=params.pageNumber||1;

    useEffect(()=>{
        dispatch({type:PRODUCT_CREATE_RESET});
        if(!userInfo||!userInfo.isAdmin){
            navigate('/login');
        };
        if(successCreate){
            navigate(`/admin/product/${createdProduct._id}/edit`);
        }else{
            dispatch(listProducts('',pageNumber));
        }
    },[dispatch,userInfo,navigate,successDelete,successCreate,createdProduct,pageNumber]);

    const deleteHandler=(id)=>{
        // added confirmation in case of accidental click
        if(window.confirm('Are you sure? This cannot be undone!')){
            dispatch(deleteProduct(id));
        };
    };

    const createProductHandler=()=>{
        dispatch(createProduct());
    };

    return (
        <div className="TAA-Product List">
            <h1>Products</h1>
            <Button className="my-3" onClick={createProductHandler}><i className="fa-solid fa-circle-plus"></i> Create Product</Button>
            {loadingDelete&&<Loader/>}
            {errorDelete&&<Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate&&<Loader/>}
            {errorCreate&&<Message variant='danger'>{errorCreate}</Message>}
            {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
                <>
                <MetaWrapper title='TAA-Home'/>
                <Table striped bordered hover responsive className="table-sm" style={{textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th>QTY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product=>(
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>{product.countInStock}</td>
                                <td>
                                    <LinkContainer style={{marginRight:'5px'}} to={`/admin/product/${product._id}/edit`}><Button variant='light' className="btn-sm"><i className="fa-solid fa-pen-ruler"></i></Button></LinkContainer>
                                    <Button style={{marginLeft:'5px'}} variant='danger' className="btn-sm" onClick={()=>deleteHandler(product._id)}><i className="fa-solid fa-ban"></i></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Paginate pages={pages} page={page} isAdmin={true}/>
                </>
            )}
        </div>
    );
};

export default ProductList;
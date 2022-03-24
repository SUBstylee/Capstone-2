import axios from "axios";
import { useState,useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import {listProductDetails,updateProduct} from '../../actions/productActions';
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";


import FormContainer from "../../components/FormContainer/FormContainer";
import { PRODUCT_UPDATE_RESET,PRODUCT_DETAILS_RESET } from "../../constants/productConstants";

const ProductEdit = () => {
    const [name,setName]=useState('');
    const [price,setPrice]=useState(0);
    const [image,setImage]=useState('');
    const [brand,setBrand]=useState('');
    const [category,setCategory]=useState('');
    const [countInStock,setCountInStock]=useState(0);
    const [description,setDescription]=useState('');
    const [uploading,setUploading]=useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo}=userLogin;
    const productDetails=useSelector((state)=>state.productDetails);
    const {loading,error,product}=productDetails;
    const productUpdate=useSelector((state)=>state.productUpdate);
    const {loading:loadingUpdate,error:errorUpdate,success:successUpdate}=productUpdate;

    const {id}=useParams();

    useEffect(()=>{
        if(!userInfo||!userInfo.isAdmin){
            navigate('/login');
        };
        if(successUpdate){
            dispatch({type: PRODUCT_UPDATE_RESET});
            dispatch({type: PRODUCT_DETAILS_RESET})
            navigate('/admin/productlist');
        }else{
            if(!product.name||product._id !== id){
                dispatch(listProductDetails(id));
            }else{
                setName(product.name);
                setPrice(product.price);
                setImage(product.image);
                setBrand(product.brand);
                setBrand(product.brand);
                setCategory(product.category);
                setCountInStock(product.countInStock);
                setDescription(product.description);
            };     
        };
          
    },[id,product,dispatch,navigate,successUpdate,userInfo]);

    const uploadFileHandler=async (e)=>{
        const file=e.target.files[0];
        const formData=new FormData();
        formData.append('image',file);
        setUploading(true);
        try {
            const config={
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            };
            const {data}=await axios.post('/api/upload',formData,config);
            setImage(data);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        };
    };
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(updateProduct({
            _id:id,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }));
    };

  return (
    <div className="ProductEdit">
        <Link to='/admin/productlist' className="btn btn-light my-3">Go Back</Link>
        <FormContainer>
            <h1>Edit Product</h1>
            {loadingUpdate&&<Loader/>}
            {errorUpdate&&<Message variant='danger'>{errorUpdate}</Message>}
            {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
                <>
                <MetaWrapper title={`TAA-Edit ${product.name}`}/>
                <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>    
                    <Form.Control type='name' autoComplete="current-name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>    
                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>    
                    <Form.Control type='number' autoComplete="current-price" placeholder="Enter price" value={price} onChange={(e)=>setPrice(e.target.value)}></Form.Control>
                </Form.Group>    
                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>    
                    <Form.Control type='text' autoComplete="current-image" placeholder="Enter image url" value={image} onChange={(e)=>setImage(e.target.value)}></Form.Control>
                    <Form.Control type='file' label='Choose File' custom='true' onChange={uploadFileHandler}></Form.Control>
                    {uploading&&<Loader/>}
                </Form.Group>    
                <Form.Group controlId='brand'>
                    <Form.Label>Brand</Form.Label>    
                    <Form.Control type='text' autoComplete="current-brand" placeholder="Enter brand" value={brand} onChange={(e)=>setBrand(e.target.value)}></Form.Control>
                </Form.Group>    
                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>    
                    <Form.Control as='select' required value={category} onChange={(e)=>setCategory(e.target.value)}>
                      <option value=''>Select a category</option>
                      <option value='__hats__'>Hats</option>
                      <option value='__shoes__'>Shoes</option>
                      <option value='__jackets__'>Jackets</option>
                      <option value='__men__'>Men</option>
                      <option value='__women__'>Women</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='countInStock'>
                    <Form.Label>Quantity</Form.Label>    
                    <Form.Control type='number' autoComplete="current-quantity" placeholder="Enter quantity" value={countInStock} onChange={(e)=>setCountInStock(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>    
                    <Form.Control as='textarea' rows='5' autoComplete="current-description" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}></Form.Control>
                </Form.Group>
                <Button className="my-2" type='submit' variant="primary">
                    Update
                </Button>    
            </Form>
            </>
            )}
        </FormContainer>
    </div>
  );
};

export default ProductEdit;
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Col, Row } from "react-bootstrap";
import Product from "../../components/Product/Product";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import { listProducts } from "../../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import Paginate from "../../components/Paginate/Paginate";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

const SearchList = () => {
  const navigate=useNavigate();
  const params=useParams();
  const keyword=params.keyword;
  const pageNumber=params.pageNumber||1;
  const dispatch=useDispatch();
  const productList=useSelector(state=>state.productList);
  const {loading,error,products,pages,page}=productList;

  useEffect(() => {
    if(keyword==='__All__'){
      dispatch(listProducts('a'||'b'||'c'||'d'||'e'||'f'||'g'||'h'||'i'||'j'||'k'||'l'||'m'||'n'||'o'||'p'||'q'||'r'||'s'||'t'||'u'||'v'||'w'||'x'||'y'||'z',pageNumber));
    }else{
      dispatch(listProducts(keyword,pageNumber));
    };
  }, [dispatch,keyword,pageNumber]);

  return (
    <div className='SearchList'>
      <MetaWrapper title={`TAA-${keyword.replace(/[^a-z0-9]/gi,'')}`}/>
      <h1>{keyword.replace(/[^a-z0-9]/gi,'')}</h1>
      <button
        className='btn btn-light'
        onClick={() => (navigate(-1) ? navigate(-1) : navigate("/"))}
      >
        Go Back
      </button>
      {loading?(
        <Loader/>
      ):error?(
        <Message variant='danger'>{error}</Message>
      ):products.length>0?
        <Row>
          {products.map((product) => (
            <Col className="mb-3" xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>:<h3>No products matching search '{keyword}' found!</h3>
      }
      <Paginate pages={pages} page={page} keyword={keyword?keyword:''} isAdmin={false}/>
    </div>
  );
};

export default SearchList;
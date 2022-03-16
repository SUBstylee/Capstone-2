import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Col, Row } from "react-bootstrap";
import Product from "../../components/Product/Product";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import { listProducts } from "../../actions/productActions";
import { useParams } from "react-router-dom";

const SearchList = () => {
  const params=useParams();
  const keyword=params.keyword;
  const dispatch=useDispatch();
  const productList=useSelector(state=>state.productList);
  const {loading,error,products}=productList;

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch,keyword]);

  return (
    <div className='SearchList'>
      <h1>Search Results</h1>
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
        </Row>:<h3>{`No products matching search '${keyword}' found!`}</h3>
      }
    </div>
  );
};

export default SearchList;
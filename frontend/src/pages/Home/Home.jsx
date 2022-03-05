import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Col, Row } from "react-bootstrap";
import Product from "../../components/Product/Product";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import { listProducts } from "../../actions/productActions";

const Home = () => {
  const dispatch=useDispatch();
  const productList=useSelector(state=>state.productList);
  const {loading,error,products}=productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (
    <div className='Home'>
      <h1>Latest Products</h1>
      {loading?(
        <Loader/>
      ):error?(
        <Message variant='danger'>{error}</Message>
      ):(
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;

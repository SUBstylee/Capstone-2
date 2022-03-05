import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link, useNavigate, useParams,useLocation} from 'react-router-dom';
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap';
import Message from '../../components/Message/Message';
// import Loader from '../../components/Loader/Loader';
import {addToCart,removeFromCart} from '../../actions/cartActions';

const Cart = () => {
  
  const {id}=useParams();
  const navigate =useNavigate();
  const location =useLocation();
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart);
  const {cartItems}=cart;
  const qty=Number(new URLSearchParams(location.search).get('qty'));

  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,qty));
    };
  },[dispatch,id,qty]);

  const removeFromCartHandler=(id)=>{
    dispatch(removeFromCart(id));
  };

  const checkoutHandler=()=>{
    navigate('/login?redirect=shipping')
  };

  return (
    <div className='Cart'>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length===0?
            <Message>No items in cart. <a href='/' className='back' onClick={(e) => {e.preventDefault();return (navigate(-1) ? navigate(-1) : navigate("/"))}}><u>Go Back</u></a></Message>: (
              <ListGroup variant='flush'>
                {cartItems.map(item=>(
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded/>  
                      </Col> 
                      <Col md={3}>
                        <Link to={`/products/${item.product}`}>{item.name}</Link>  
                      </Col> 
                      <Col md={2}>
                        ${item.price}  
                      </Col> 
                      <Col md={2}>
                        <Form.Control as='select' value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}>{x+1}</option>
                        ))}
                        </Form.Control> 
                      </Col> 
                      <Col md={2}>
                        <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product)}><i className="fa-solid fa-ban"></i></Button> 
                      </Col> 
                    </Row>  
                  </ListGroup.Item>
                ))}  
              </ListGroup>
            )
          }
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Subtotal ({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items</h2>
                ${cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)}  
              </ListGroup.Item>  
              <ListGroup.Item>
                <Button type='button' className='btn-block' disabled={cartItems.length===0} onClick={checkoutHandler}>{cartItems.length === 0 ? (
                    <del>Proceed to Checkout</del>
                  ) : (
                    "Proceed to Checkout"
                  )}</Button> 
              </ListGroup.Item>  
            </ListGroup>
          </Card>
        </Col>
      </Row>  
    </div>
  );
};

export default Cart;
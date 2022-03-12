import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,Link, useParams } from "react-router-dom";
import {Row,Col,ListGroup,Image,Card} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import { getOrderDetails,payOrder } from "../../actions/orderActions";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";
import {PayPalButton} from 'react-paypal-button-v2';
// will add stripe payments during polish phase
// import StripeCheckout from 'react-stripe-checkout';

const Order = () => {
    const {id}=useParams();
    const [sdkReady,setSdkReady]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const orderDetails=useSelector(state=>state.orderDetails);
    const {order,loading,error}=orderDetails;
    const orderPay=useSelector(state=>state.orderPay);
    const {loading:loadingPay,success:successPay}=orderPay;

    useEffect(()=>{
        if (!userInfo) {
            navigate('/login');
          }

        const addPayPalScript=async ()=>{
            const {data:clientId}=await axios.get('/api/config/paypal');
            const script=document.createElement('script');
            script.type='text/javascript';
            script.src=`https://www.paypal.com/sdk/js?client-id=${clientId}`;
            script.async=true;
            script.onload=()=>{setSdkReady(true)};
            document.body.appendChild(script);
        };

        if(!order || order._id !== id || successPay) {
            dispatch({type:ORDER_PAY_RESET});
            dispatch(getOrderDetails(id));
        }else if(!order.isPaid){
            if(!window.paypal){
                addPayPalScript();
            }else{
                setSdkReady(true);
            };
        };
    },[order,id,dispatch,successPay,navigate,userInfo]);

    const successPaymentHandler=(paymentResult)=>{
        console.log(paymentResult);
        dispatch(payOrder(id,paymentResult));
    };

    return loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
        <div className="Order">
            <h1>Order {order._id}</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Name: </strong>{order.user.name}
                            </p>
                            <p>
                                <strong>Email: </strong><a href={`mailto: ${order.user.email}`}>{order.user.email}</a>
                            </p>
                            <p>
                                <strong>Address: </strong>
                                {order.shippingAddress.address},{' '}
                                {order.shippingAddress.city},{' '}
                                {order.shippingAddress.postalCode},{' '}
                                {order.shippingAddress.country}
                            </p>
                            {order.isShipped? <Message variant='success'>Delivered on: {order.paidAt}</Message>:<Message variant='warning'>Delivery pending</Message>}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment</h2>
                            <p>
                                <strong>Method: </strong>{order.paymentMethod}
                            </p>
                            {order.isPaid? <Message variant='success'>Paid on: {order.paidAt}</Message>:<Message variant='warning'>Awaiting payment</Message>}
                        </ListGroup.Item>  
                        <ListGroup.Item>
                            <h2>Items In Order</h2>
                            {order.orderItems.length===0? <Message>Order is empty...</Message>:(
                                <ListGroup variant="flush">
                                    {order.orderItems.map((item,index)=>(
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>    
                                                <Col>
                                                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} X ${item.price} = <strong>${item.qty * item.price}</strong>
                                                </Col>
                                            </Row>    
                                        </ListGroup.Item>
                                    ))}    
                                </ListGroup>
                            )}
                        </ListGroup.Item>  
                    </ListGroup>    
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Subtotal</Col>
                                    <Col>${order.itemsPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${order.shippingPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${order.taxPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col><strong>${order.totalPrice.toFixed(2)}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            {!order.isPaid&&(
                                <ListGroup.Item>
                                    {loadingPay&&<Loader/>}
                                    {!sdkReady?<Loader/>:<PayPalButton amount={order.totalPrice.toFixed(2)} onSuccess={successPaymentHandler}/>}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>  
        </div>
    )
};

export default Order;
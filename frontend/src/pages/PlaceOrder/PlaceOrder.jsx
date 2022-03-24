import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import {Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import { createOrder } from "../../actions/orderActions";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

const PlaceOrder = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const cart=useSelector(state=>state.cart);
    //calc prices
    cart.orderItems=cart.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0);
    cart.shippingPrice=cart.orderItems>=100?0.00:10.00;
    cart.taxPrice=Number(0.12*cart.orderItems);
    cart.totalPrice=(Number(cart.orderItems)+Number(cart.shippingPrice)+cart.taxPrice);

    const orderCreate=useSelector(state=>state.orderCreate);
    const {order,success,error}=orderCreate;

    useEffect(()=>{
        if(success){
            navigate(`/order/${order._id}`);
        };
        // eslint-disable-next-line
    },[navigate,success]);

    const placeOrderHandler=()=>{
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: Number(cart.taxPrice).toFixed(2),
            totalPrice: Number(cart.totalPrice).toFixed(2),
        }));
    };

    return (
        <div className="PlaceOrder">
            <MetaWrapper title='TAA-Place Order'/>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address},{' '}
                                {cart.shippingAddress.city},{' '}
                                {cart.shippingAddress.postalCode},{' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}  
                        </ListGroup.Item>  
                        <ListGroup.Item>
                            <h2>Items In Order</h2>
                            {cart.cartItems.length===0? <Message>Your cart is empty...</Message>:(
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item,index)=>(
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
                                    <Col>${cart.orderItems.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${cart.shippingPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cart.taxPrice.toFixed(2)}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col><strong>${cart.totalPrice.toFixed(2)}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error&&<Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className="btn-block" disabled={cart.cartItems.length===0} onClick={placeOrderHandler}>{cart.cartItems.length===0?(<del>Place Order</del>):('Place Order')}</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>  
        </div>
    );
};

export default PlaceOrder;
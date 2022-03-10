import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";

const PlaceOrder = () => {
    const cart=useSelector(state=>state.cart);
    //calc prices
    cart.subtotal=cart.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0);
    cart.shippingPrice=cart.subtotal>=100?0.00:10.00;
    cart.taxPrice=Number(0.12*cart.subtotal);
    cart.totalPrice=(Number(cart.subtotal)+Number(cart.shippingPrice)+cart.taxPrice);

    const placeOrderHandler=()=>{
        console.log('order placed');
    };

    return (
        <div className="PlaceOrder">
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
                                    <Col>${cart.subtotal.toFixed(2)}</Col>
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form,Button,Col, Row} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import { savePaymentMethod } from "../../actions/cartActions";
import FormContainer from "../../components/FormContainer/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

import './Payment.scss'

const Payment = () => {
    const cart=useSelector(state=>state.cart);
    const {shippingAddress}=cart;
    const dispatch=useDispatch();
    const navigate=useNavigate();

    if(!shippingAddress)navigate('/shipping');

    const [paymentMethod,setPaymentMethod]=useState('PayPal');

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    };

    return (
        <div className="Payment">
            <MetaWrapper title='TAA-Payment'/>
            <FormContainer>
                <CheckoutSteps step1 step2 step3/>
                <h1>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label as='legend'>Select Method</Form.Label>
                        <Row>
                        <Col className="payment-icons" xs={1}>
                            <label htmlFor="PayPal"><i className="fa-brands fa-paypal"></i></label><br/>
                            <label htmlFor="Stripe"><i className="fa-brands fa-stripe-s"></i></label>
                        </Col>
                        <Col xs={2}>
                            <Form.Check type='radio' label='PayPal' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
                            <Form.Check type='radio' label='Stripe' id='Stripe' name='paymentMethod' value='Stripe' onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
                        </Col>
                        </Row>
                    </Form.Group>
                    <Button className='mt-2' type='submit' variant="primary">Continue</Button>
                </Form>
            </FormContainer>   
        </div>
    );
};

export default Payment;
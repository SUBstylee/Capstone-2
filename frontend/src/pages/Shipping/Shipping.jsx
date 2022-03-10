import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";
import FormContainer from "../../components/FormContainer/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";

const Shipping = () => {
    const cart=useSelector(state=>state.cart);
    const {shippingAddress}=cart;
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [address,setAddress]=useState(shippingAddress.address||'');
    const [city,setCity]=useState(shippingAddress.city||'');
    const [postalCode,setPostalCode]=useState(shippingAddress.postalCode||'');
    const [country,setCountry]=useState(shippingAddress.country||'');

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}));
        navigate('/payment');
    };

    return (
        <div className="Shipping">
            <FormContainer>
                <CheckoutSteps step1 step2/>
                <h1>Shipping</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='address'>
                        <Form.Label>Address</Form.Label>    
                        <Form.Control type='address' autoComplete="address" placeholder="Enter address" value={address} required onChange={(e)=>setAddress(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='city'>
                        <Form.Label>City</Form.Label>    
                        <Form.Control type='city' autoComplete="home city" placeholder="Enter city" value={city} required onChange={(e)=>setCity(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='postalCode'>
                        <Form.Label>Postal code</Form.Label>    
                        <Form.Control type='postalCode' autoComplete="postal-code" placeholder="Enter postal code" value={postalCode} required onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='country'>
                        <Form.Label>Country</Form.Label>    
                        <Form.Control type='country' autoComplete="country" placeholder="Enter country" value={country} required onChange={(e)=>setCountry(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button className='mt-2' type='submit' variant="primary">Continue</Button>
                </Form>
            </FormContainer>   
        </div>
    );
};

export default Shipping
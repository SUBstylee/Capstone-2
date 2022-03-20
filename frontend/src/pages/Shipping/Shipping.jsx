import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";
import FormContainer from "../../components/FormContainer/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";
import CustomInput from "../../components/CustomInput/CustomInput";

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
            <MetaWrapper title='TAA-Shipping'/>
            <FormContainer>
                <CheckoutSteps step1 step2/>
                <h1>Shipping</h1>
                <Form onSubmit={submitHandler}>
                    <CustomInput 
                        id='address' 
                        type='text' 
                        autoComplete="address" 
                        name='address' 
                        labelText='Address' 
                        value={address} 
                        required 
                        onChange={(e)=>setAddress(e.target.value)}/>
                    <CustomInput 
                        id='city' 
                        type='text' 
                        autoComplete="home city" 
                        name='city' 
                        labelText='City' 
                        value={city} 
                        required 
                        onChange={(e)=>setCity(e.target.value)}/>
                    <CustomInput 
                        id='postalCode' 
                        type='number' 
                        autoComplete="postal-code" 
                        name='postalCode' 
                        labelText='Postal Code' 
                        value={postalCode} 
                        required 
                        onChange={(e)=>setPostalCode(e.target.value)}/>
                    <CustomInput 
                        id='country' 
                        type='text' 
                        autoComplete="country" 
                        name='country' 
                        labelText='Country' 
                        value={country} 
                        required 
                        onChange={(e)=>setCountry(e.target.value)}/>
                    <Button className='mt-2' type='submit' variant="primary">Continue</Button>
                </Form>
            </FormContainer>   
        </div>
    );
};

export default Shipping
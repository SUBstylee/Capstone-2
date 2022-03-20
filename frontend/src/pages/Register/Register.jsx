import { useState,useEffect } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import CustomInput from "../../components/CustomInput/CustomInput";
import {register} from '../../actions/userActions';
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

import FormContainer from "../../components/FormContainer/FormContainer";
import PasswordGenerator from "../../components/PasswordGenerator/PasswordGenerator";

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [message,setMessage]=useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch=useDispatch();
    const userRegister=useSelector((state)=>state.userRegister);
    const {loading,error,userInfo}=userRegister;
    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        };
    },[navigate,userInfo,redirect]);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            setMessage('Passwords do not match!')
        }else{
            dispatch(register(name,email,password))
        };
        
    };

  return (
    <div className="Login">
        <Row>
            <Col lg={6}>
        <FormContainer>
            <h1>Sign Up</h1>
            {message&&<Message variant='danger'>{message}</Message>}
            {error&&<Message variant='danger'>{error}</Message>}
            {loading&&<Loader/>}
            <MetaWrapper title='TAA-Register'/>
            <Form onSubmit={submitHandler}>   
                <CustomInput 
                    id='name' 
                    type='text' 
                    autoComplete="current-name" 
                    name='name' 
                    labelText='Full Name' 
                    value={name} 
                    required 
                    onChange={(e)=>setName(e.target.value)}/>
                <CustomInput 
                    id='email' 
                    type='email' 
                    autoComplete="current-email" 
                    name='email' 
                    labelText='Email Address' 
                    value={email} 
                    required 
                    onChange={(e)=>setEmail(e.target.value)}/>      
                <CustomInput 
                    id='password' 
                    type='password' 
                    autoComplete="new-password" 
                    name='password'
                    labelText='Password'
                    value={password} 
                    required 
                    onChange={(e)=>setPassword(e.target.value)}/>   
                <CustomInput
                    id='confirmPassword'
                    type='password'
                    autoComplete="new-password"
                    name='confirmPassword'
                    labelText='Confirm Password'
                    value={confirmPassword}
                    required
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <Button className="my-2" type='submit' variant="primary">
                    Register
                </Button>    
            </Form>
            <Row className="py-3">
                <Col>
                    Have an Account? <Link to={redirect ? `/login?redirect=${redirect}`:'/login'}>Login</Link>
                </Col>    
            </Row>
        </FormContainer>
        </Col>
        <Col lg={6}>
            <FormContainer>
                <PasswordGenerator/>
            </FormContainer>
            
        </Col>
        </Row>
    </div>
  );
};

export default Register;
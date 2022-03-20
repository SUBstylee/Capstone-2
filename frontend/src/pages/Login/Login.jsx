import { useState,useEffect } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import CustomInput from "../../components/CustomInput/CustomInput";
import {login} from '../../actions/userActions';
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

import FormContainer from "../../components/FormContainer/FormContainer";

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch=useDispatch();
    const userLogin=useSelector((state)=>state.userLogin);
    const {loading,error,userInfo}=userLogin;
    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        };
    },[navigate,userInfo,redirect]);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(email, password));
    };

  return (
    <div className="Login">
        <MetaWrapper title='TAA-Login'/>
        <FormContainer>
            <h1>Sign In</h1>
            {error&&<Message variant='danger'>{error}</Message>}
            {loading&&<Loader/>}
            <Form onSubmit={submitHandler}>
                <CustomInput id='email' type='email' autoComplete='current-email' name='email' labelText='Email Address' required={true} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <CustomInput id='password' type='password' autoComplete='current-password' name='password' labelText='Password' required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button className="my-2" type='submit' variant="primary">
                    Sign In
                </Button>    
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}`:'/register'}>Register</Link>
                </Col>    
            </Row>
        </FormContainer>
    </div>
  );
};

export default Login;
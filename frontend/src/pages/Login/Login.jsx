import { useState,useEffect } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import {login} from '../../actions/userActions';

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
        <FormContainer>
            <h1>Sign In</h1>
            {error&&<Message variant='danger'>{error}</Message>}
            {loading&&<Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>    
                    <Form.Control type='email' autoComplete="current-email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>    
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>    
                    <Form.Control type='password' autoComplete="current-password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
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
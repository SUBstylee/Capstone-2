import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Form,Button,Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import {getUserDetails,updateUserProfile} from '../../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";

const Profile = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [message,setMessage]=useState(null);

    const navigate = useNavigate();
    const dispatch=useDispatch();
    const userDetails=useSelector((state)=>state.userDetails);
    const {loading,error,user}=userDetails;
    const userLogin=useSelector((state)=>state.userLogin);
    const {userInfo}=userLogin;
    const userUpdateProfile=useSelector((state)=>state.userUpdateProfile);
    const {success}=userUpdateProfile;

    useEffect(()=>{
        if(!userInfo){
            navigate('/login');
        }else{
            if(!user||!user.name||success){
                dispatch({type:USER_UPDATE_PROFILE_RESET});
                dispatch(getUserDetails('profile'));
            }else{
                setName(user.name);
                setEmail(user.email);
            };
        };
    },[navigate,userInfo,dispatch,user,success]);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            setMessage('Passwords do not match!')
        }else{
            dispatch(updateUserProfile({id:user._id,name,email,password}))
        };
        
    };

  return (
    <div className="Profile">
        {loading&&<Loader/>}
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message&&<Message variant='danger'>{message}</Message>}
                {error&&<Message variant='danger'>{error}</Message>}
                {success&&<Message variant='success'>Profile Updated!</Message>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>    
                        <Form.Control type='name' autoComplete="current-name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                    </Form.Group>    
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>    
                        <Form.Control type='email' autoComplete="current-email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                    </Form.Group>    
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>    
                        <Form.Control type='password' autoComplete="new-password" placeholder="Enter new password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>    
                        <Form.Control type='password' autoComplete="new-password" placeholder="Confirm new password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button className="my-2" type='submit' variant="primary">
                        Update
                    </Button>    
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    </div>
  );
};

export default Profile;
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Form,Button,Row,Col,Table} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import CustomInput from "../../components/CustomInput/CustomInput";
import {getUserDetails,updateUserProfile} from '../../actions/userActions';
import {listMyOrders} from '../../actions/orderActions';
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
    const myOrderList=useSelector((state)=>state.orderListMyOrders);
    const {loading:loadingOrders,error:errorOrders,orders}=myOrderList;

    useEffect(()=>{
        if(!userInfo){
            navigate('/login');
        }else{
            if(!user||!user.name||success){
                dispatch({type:USER_UPDATE_PROFILE_RESET});
                dispatch(getUserDetails('profile'));
                dispatch(listMyOrders());
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
            <Col lg={4}>
                <h2>User Profile</h2>
                {message&&<Message variant='danger'>{message}</Message>}
                {error&&<Message variant='danger'>{error}</Message>}
                {success&&<Message variant='success'>Profile Updated!</Message>}
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
                        Update
                    </Button>    
                </Form>
            </Col>
            <Col lg={8}>
                <h2>My Orders</h2>
                {loadingOrders?(<Loader/>):errorOrders?(<Message variant='danger'>{errorOrders}</Message>):(
                    <Table striped bordered hover responsive className='table-sm align-items-center' style={{textAlign:'center'}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order=>(
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.substring(0,10)}</td>
                                    <td>{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid?order.paidAt.substring(0,10):(<i className="fa-solid fa-circle-xmark" style={{color:'red'}}></i>)}</td>
                                    <td>{order.isDelivered?order.deliveredAt.substring(0,10):(<i className="fa-solid fa-circle-xmark" style={{color:'red'}}></i>)}</td>
                                    <td><LinkContainer to={`/order/${order._id}`}><Button variant='light' className="btn-sm">Order Details</Button></LinkContainer></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Col>
        </Row>
    </div>
  );
};

export default Profile;
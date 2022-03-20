import { useState,useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Form,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import {getUserDetails,updateUser} from '../../actions/userActions';
import { USER_UPDATE_RESET } from "../../constants/userConstants";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

import FormContainer from "../../components/FormContainer/FormContainer";

const UserEdit = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [isAdmin,setIsAdmin]=useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo}=userLogin;
    const userDetails=useSelector((state)=>state.userDetails);
    const {loading,error,user}=userDetails;
    const userUpdate=useSelector((state)=>state.userUpdate);
    const {loading:loadingUpdate,error:errorUpdate,success:successUpdate}=userUpdate;
    const {id}=useParams();

    useEffect(()=>{
        if(!userInfo||!userInfo.isAdmin){
            navigate('/login');
        }else{
            if(successUpdate){
                dispatch({type:USER_UPDATE_RESET});
                navigate('/admin/userlist');
            }else{
                if(!user.name||user._id !== id){
                    dispatch(getUserDetails(id));
                }else{
                    setName(user.name);
                    setEmail(user.email);
                    setIsAdmin(user.isAdmin);
                };
            };  
        };      
    },[id,user,dispatch,successUpdate,navigate,userInfo]);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(updateUser({_id:id,name,email,isAdmin}));
    };

  return (
    <div className="UserEdit">
        <MetaWrapper title={`TAA-Edit ${name}`}/>
        <Link to='/admin/userlist' className="btn btn-light my-3">Go Back</Link>
        <FormContainer>
            <h1>Edit User</h1>
            {loadingUpdate&&<Loader/>}
            {errorUpdate&&<Message variant='danger'>{errorUpdate}</Message>}
            {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
                <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>    
                    <Form.Control type='name' autoComplete="current-name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>    
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>    
                    <Form.Control type='email' autoComplete="current-email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>    
                <Form.Group controlId='isAdmin'>  
                    <Form.Check disabled={userInfo?userInfo._id === user._id:false} type='checkbox' label='Is Admin' checked={isAdmin} onChange={(e)=>setIsAdmin(e.target.checked)}></Form.Check>
                </Form.Group>
                <Button className="my-2" type='submit' variant="primary">
                    Update
                </Button>    
            </Form>
            )}
        </FormContainer>
    </div>
  );
};

export default UserEdit;
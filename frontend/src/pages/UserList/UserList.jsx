import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Table,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import { listUsers,deleteUser } from "../../actions/userActions";

const UserList = () => {
    const dispatch=useDispatch();
    const userList=useSelector(state=>state.userList);
    const {loading,error,users}=userList;
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo}=userLogin;
    const userDelete=useSelector(state=>state.userDelete);
    const {success:successDelete}=userDelete;
    const navigate=useNavigate();

    useEffect(()=>{
        if(userInfo&&userInfo.isAdmin){
            dispatch(listUsers());
        }else{
            navigate('/login');
        };
    },[dispatch,userInfo,navigate,successDelete]);

    const deleteHandler=(id)=>{
        // added confirmation in case of accidental click
        if(window.confirm('Are you sure? This cannot be undone!')){
            dispatch(deleteUser(id));
        };
    };

    return (
        <div className="UserList">
            <h1>Users</h1>
            {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
                <Table striped bordered hover responsive className="table-sm" style={{textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user=>(
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                <td>{user.isAdmin?(<i className="fa-solid fa-circle-check" style={{color:'green'}}></i>):(<i className="fa-solid fa-circle-xmark" style={{color:'red'}}></i>)}</td>
                                <td>
                                    <LinkContainer style={{marginRight:'5px'}} to={`/admin/user/${user._id}/edit`}><Button variant='light' className="btn-sm"><i className="fa-solid fa-user-pen"></i></Button></LinkContainer>
                                    <Button disabled={userInfo._id === user._id} style={{marginLeft:'5px'}} variant='danger' className="btn-sm" onClick={()=>deleteHandler(user._id)}><i className="fa-solid fa-ban"></i></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default UserList;
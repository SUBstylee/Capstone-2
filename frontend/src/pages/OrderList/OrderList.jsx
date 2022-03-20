import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Table,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from '../../components/Loader/Loader';
import {listOrders} from '../../actions/orderActions';
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

const OrderList = () => {
    const dispatch=useDispatch();
    const orderList=useSelector(state=>state.orderList);
    const {loading,error,orders}=orderList;
    const userLogin=useSelector(state=>state.userLogin);
    const {userInfo}=userLogin;
    const navigate=useNavigate();

    useEffect(()=>{
        if(userInfo&&userInfo.isAdmin){
            dispatch(listOrders());
        }else{
            navigate('/login');
        };
    },[dispatch,userInfo,navigate]);

    return (
        <div className="UserList">
            <MetaWrapper title='TAA-Order List'/>
            <h1>Orders</h1>
            {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
                <Table striped bordered hover responsive className="table-sm" style={{textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
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
                                <td>{order.user&&order.user.name}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>${order.totalPrice}</td>
                                <td>{order.isPaid?(order.paidAt.substring(0,10)):(<i className="fa-solid fa-circle-xmark" style={{color:'red'}}></i>)}</td>
                                <td>{order.isDelivered?(order.deliveredAt.substring(0,10)):(<i className="fa-solid fa-circle-xmark" style={{color:'red'}}></i>)}</td>
                                <td>
                                    <LinkContainer to={`/order/${order._id}`}><Button variant='light' className="btn-sm">Details</Button></LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default OrderList;
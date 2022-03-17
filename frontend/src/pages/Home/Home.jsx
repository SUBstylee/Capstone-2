import Directory from "../../components/Directory/Directory";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { useSelector } from "react-redux";
const Home = () => {
  const productList=useSelector(state=>state.productList);
  const {loading,error}=productList;

  return (
    <div className='Home'>
      <h1>Welcome to Totally Awesome Apparel!</h1>
      {loading?
      (<Loader/>):error?
      (<Message variant='danger'>{error}</Message>):(<Directory/>)}
      
    </div>
  );
};

export default Home;

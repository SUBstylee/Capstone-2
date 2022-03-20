import Directory from "../../components/Directory/Directory";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import TopProducts from "../../components/TopProducts/TopProducts";
import { useSelector } from "react-redux";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

const Home = () => {
  const productList=useSelector(state=>state.productList);
  const {loading,error}=productList;

  return (
    <div className='Home'>
      <MetaWrapper title='TAA-Home'/>
      <h1>Welcome to Totally Awesome Apparel!</h1>
      {loading?
      (<Loader/>):error?
      (<Message variant='danger'>{error}</Message>):(
        <>
        <Directory/>
        <TopProducts/>
        </>
      )}
    </div>
  );
};

export default Home;

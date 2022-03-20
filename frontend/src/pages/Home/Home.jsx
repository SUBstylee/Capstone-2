import Directory from "../../components/Directory/Directory";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import TopProducts from "../../components/TopProducts/TopProducts";
import { useSelector } from "react-redux";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";
import Toast from "../../components/Toast/Toast";

const Home = () => {
  const productList=useSelector(state=>state.productList);
  const {loading,error}=productList;

  return (
    <div className='Home'>
      <h1>Welcome to Totally Awesome Apparel!</h1>
      <Toast top={`50px`} right={`25px`} time={15000} messageTitle={'Not a real store!'} messageText={'This site was build using the MERN stack. Payments are in test mode, so you will not be charged. There are no real products here.'}/>
      {loading?
      (<Loader/>):error?
      (<Message variant='danger'>{error}</Message>):(
        <>
        <MetaWrapper title='TAA-Home'/>
        <Directory/>
        <TopProducts/>
        </>
      )}
    </div>
  );
};

export default Home;

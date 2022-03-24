import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import Loader from '../Loader/Loader';
import Rating from '../Rating/Rating';
import Message from '../Message/Message';
import Carousel from 'react-multi-carousel';
import {listTopProducts} from '../../actions/productActions';

import './TopProducts.scss';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

const TopProducts = () => {
    const dispatch=useDispatch();
    const productTopRated=useSelector(state=>state.productTopRated);
    const {loading,error,products} =productTopRated;
    const images = products.map((product) => product);

    useEffect(()=>{
        dispatch(listTopProducts());
    },[dispatch]);

    return (
        <div className="TopProducts">
            {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
                <>
                <h3 className='carousel-title m-0 p-3 text-dark'>Top Rated Products</h3>
                <Carousel
                  autoPlay
                  infinite
                  className='image-item fade-in'
                  responsive={responsive}
                  swipeable
                  renderArrowsWhenDisabled
                  partialVisible={true}
                >
                  {images.slice(0, 8).map((product) => {
                    return (
                      <div key={product.name} className=''>
                          <Link to={`/products/${product._id}`} className='text-dark'>
                        <Image
                          fluid
                          className='img-carousel'
                          draggable={false}
                          src={product.image}
                        />
                        
                          <p className='p-0 m-0  fs-6 '>{product.name}</p>
                        </Link>
                        <p className='p-0 m-0  fs-6'>${product.price}</p>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews}  reviews`}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </>
            )}
        </div>
    );
};

export default TopProducts
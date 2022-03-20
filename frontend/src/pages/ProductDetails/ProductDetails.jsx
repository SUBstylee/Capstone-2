import { useParams, useNavigate,Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails,createProductReview } from "../../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import CustomTextArea from "../../components/CustomTextArea/CustomTextArea";
import MetaWrapper from "../../components/MetaWrapper/MetaWrapper";

const ProductDetails = () => {
  const [qty,setQty]=useState(1);
  const [rating,setRating]=useState(0);
  const [comment,setComment]=useState('');

  const dispatch=useDispatch();
  const {id}=useParams();
  const navigate = useNavigate();
  const productDetails=useSelector(state=>state.productDetails);
  const {loading,error,product}=productDetails;
  const userLogin=useSelector(state=>state.userLogin);
  const {userInfo}=userLogin;
  const productCreateReview=useSelector(state=>state.productCreateReview);
  const {error:errorProductReview,success:successProductReview}=productCreateReview;

  useEffect(() => {
    if(errorProductReview){
      const messageTimer = setTimeout(() => {
        dispatch({type:PRODUCT_CREATE_REVIEW_RESET});
      }, 5000);
  
      return () => {
        clearTimeout(messageTimer);
      };
    };
    if(successProductReview){
      alert('Review Submitted!');
      setRating(0);
      setComment('');
      dispatch({type:PRODUCT_CREATE_REVIEW_RESET});
    };
    dispatch(listProductDetails(id));
  }, [dispatch,id,successProductReview,errorProductReview]);
  
  const addToCartHandler=()=>{
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(createProductReview(id,{rating,comment}));
  };

  return (
    <div className='ProductDetails'>
      <button
        className='btn btn-light'
        onClick={() => (navigate(-1) ? navigate(-1) : navigate("/"))}
      >
        Go Back
      </button>
      {loading?(
        <Loader/>
      ):error?(
        <Message variant='danger'>{error}</Message>
      ):(
        <>
        <MetaWrapper title={`TAA-${product.name}`}/>
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} ${
                  product.numReviews === 1 ? "review" : "reviews"
                }`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>price</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock>0&&(
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map((x)=>(
                        <option key={x+1} value={x+1}>{x+1}</option>
                      ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  {product.countInStock === 0 ? (
                    <del>Add to cart</del>
                  ) : (
                    "Add to cart"
                  )}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Reviews</h2>
          {product.reviews.length===0&&<Message>No reviews yet.</Message>}
          <ListGroup variant='flush'>
            {product.reviews.map(review=>(
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating}/>
                <p>{review.createdAt.substring(0,10)}</p>
                <p>{review.comment}</p>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <h2>Leave a review!</h2>
              {errorProductReview&&<Message variant='danger'>{errorProductReview}</Message>}
              {userInfo?(
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as='select' required value={rating} onChange={(e)=>setRating(e.target.value)}>
                      <option value=''>Select a rating...</option>
                      <option value='1'>1 - Terrible</option>
                      <option value='2'>2 - Poor</option>
                      <option value='3'>3 - Average</option>
                      <option value='4'>4 - Good</option>
                      <option value='5'>5 - Great</option>
                    </Form.Control>
                  </Form.Group>
                  <CustomTextArea
                    id='comment' 
                    name='comment' 
                    labelText='Comment'  
                    required 
                    value={comment} 
                    onChange={(e)=>setComment(e.target.value)}
                  />
                  <Button type='submit' variant='primary'>Submit</Button>
                </Form>
              ):(<Message>You must <Link to='/login'>sign in</Link> to leave a review.</Message>)}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      </>
      )}
    </div>
  );
};

export default ProductDetails;

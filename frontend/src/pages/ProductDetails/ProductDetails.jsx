import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const match = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  // const product = products.find((p) => p._id === match.id);
  return (
    <div className='ProductDetails'>
      <button
        className='btn btn-light'
        onClick={() => (navigate(-1) ? navigate(-1) : navigate("/"))}
      >
        Go Back!!
      </button>
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
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
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
    </div>
  );
};

export default ProductDetails;

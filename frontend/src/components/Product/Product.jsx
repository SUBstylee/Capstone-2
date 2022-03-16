import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Product.scss';

import Rating from "../Rating/Rating";

import "./Product.scss";

const Product = ({ product }) => {
  return (
    <div className="Product">
    <Card className='h-100 my-2 p-1 rounded Product'>
      <Link to={`/products/${product._id}`}>
        <Card.Img className="cardImg" src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} ${
              product.numReviews === 1 ? "review" : "reviews"
            }`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Product;

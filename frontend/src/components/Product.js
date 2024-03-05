import "./Product.css";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../redux/actions/productActions";

const Product = ({ imageUrl, description, price, name, productId, match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  console.log(productDetails);
  // useEffect(() => {
  //   if (product && product) {
  //     dispatch(getProductDetails(productId));
  //   }
  // }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, 1));
  };

  return (
    <div className="product">
      <img
        src={imageUrl}
        alt={name}
      />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link
          to={`/product/${productId}`}
          className="info__button"
        >
          View
        </Link>
        <button
          type="button"
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

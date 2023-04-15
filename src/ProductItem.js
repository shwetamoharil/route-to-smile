import "./ProductItem.scss";
import { useDispatch } from "react-redux";
import { productActions } from "./store/products-slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(productActions.removeProduct(id));
  };

  const { title, description, price, rating, id } = product;
  return (
    <div className="product-list-item">
      <div className="product-list-item__product">{title}</div>
      <div className="product-list-item__product">{description}</div>
      <div className="product-list-item__product">{price}</div>
      <div className="product-list-item__product">{rating}</div>
      <button
        className="product-list-item__action-btn"
        onClick={() => handleDeleteProduct(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductItem;

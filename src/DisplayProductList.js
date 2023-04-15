import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./store/products-slice";
import "./DisplayProductList.scss";
import ProductItem from "./ProductItem";
const URL = "https://dummyjson.com/products";

const DisplayProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    dispatch(productActions.setProductsData(json.products));
  };
  return (
    <div className="display-product-list-container">
      <p>List</p>
      <div className="display-product-list-container__grid">
        <h3>Title</h3>
        <h3>Description</h3>
        <h3>Price</h3>
        <h3>Rating</h3>
        <h3>Action</h3>
      </div>
      <div className="display-product-list-container__list-container">
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product}></ProductItem>
          ))}
      </div>
    </div>
  );
};

export default DisplayProductList;

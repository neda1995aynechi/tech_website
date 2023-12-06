import React from "react";
import "./store.css";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

export default function Store() {
  const products = useSelector((state) => state.products.products);

  const listItem =
    products.length > 0
      ? products.map((el) => (
          <ProductCard product={el} key={el.id}></ProductCard>
        ))
      : null;

  return (
    <div className="gpt3__store-container">
      <div className="gpt3__store_container-products">
        <h2 className="gradient__text">Unique Futurastic Products</h2>
        <div className="gpt3__store__container_products-customCard">
          {listItem}
        </div>
      </div>
      <div className="gpt3__store_container-details">
        <p>test</p>
      </div>
    </div>
  );
}

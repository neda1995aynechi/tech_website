import React from "react";
import "../store.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterItem } from "../../../store/slices/products";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="gpt3__store__container__products_customCard-innerCard">
      <img src={product.image} alt="p1" />
      <h4>
        <Link
          onClick={() => dispatch(filterItem(product.id))}
          to={`/product-details/${product.id}`}
        >
          {product.title}
        </Link>
      </h4>
      <p>{product.price}</p>
    </div>
  );
}

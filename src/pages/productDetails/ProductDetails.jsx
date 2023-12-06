import React from "react";
import "./productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToList } from "../../store/slices/shoppingList";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatched = useDispatch();
  const items = useSelector((state) => state.products.filterProducts)[0];

  return (
    <div className="gpt3__productDetails-container">
      <div className="gpt3__productDetails_container-producttDetails">
        <div className="gpt3__productDetails__container_producttDetails-product">
          <img src={items.image} alt="product" />
        </div>
        <div className="gpt3__productDetails__container_producttDetails-product-description">
          <h2>{items.title}</h2>
          <h5>smart robot for entertainment</h5>
          <div>
            <h5>Description:</h5>
            <p>{items.description}</p>

            <p>{items.price}</p>
          </div>
        </div>
      </div>
      <div className="gpt3__productDetails_container-purchase">
        <p>Do you like this item?</p>
        <button onClick={() => dispatched(addToList(items))} type="button">
          Add To Cart
        </button>

        <Link to="/my-cart">Cart</Link>
      </div>
    </div>
  );
}

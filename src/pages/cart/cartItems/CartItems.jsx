import React from "react";
import "../cart.css";
import { removeFromList, addOne } from "../../../store/slices/shoppingList";
import { useDispatch } from "react-redux";

export default function CartItems({ item }) {
  const dispatched = useDispatch();

  return (
    <>
      <div className="gpt3__cart_container-cartDetails">
        <div>
          <img src={item.image} alt="cart" />
        </div>
        <div className="gpt3__cart_container_cartDetails-textHolder">
          <h4>{item.title}</h4>
          <div className="gpt3__cart__container__cartDetails_textHolder-counter">
            <button
              onClick={() => dispatched(removeFromList(item.id))}
              type="button"
            >
              -
            </button>
            <p> {item.quantity} </p>
            <button onClick={() => dispatched(addOne(item.id))} type="button">
              +
            </button>
          </div>

          <p>{item.price}</p>
        </div>
      </div>
    </>
  );
}

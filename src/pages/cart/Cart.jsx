import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./cartItems/CartItems";
import { removeAll } from "../../store/slices/shoppingList";

export default function Cart() {
  const list = useSelector((state) => state.shoppingList.list);
  const dispatched = useDispatch();

  let totalPrice = 0;

  const billSummery =
    list.length > 0
      ? list.map((el, index) => {
          totalPrice = totalPrice + el.price * el.quantity;
          return <p key={index}></p>;
        })
      : null;

  const cartItems =
    list.length > 0
      ? list.map((el) => <CartItems item={el} key={el.id}></CartItems>)
      : null;

  return (
    <div className="gpt3__cart-sub-container">
      {console.log(list)}
      <div className="gpt3__cart-container">
        <h2 className="gradient__text">Cart</h2>

        {/* cart items */}
        {cartItems}

        {list.length > 0 ? (
          <button onClick={() => dispatched(removeAll(list))} type="button">
            Remove All
          </button>
        ) : null}
      </div>
      <div className="gpt3__cart_container-summery">
        <div className="gpt3__cart__container_summery-card">
          <h3>Summary</h3>
          <div className="gpt3__cart__container__summery_card-wapper">
            <div className="gpt3__cart__container__summery_wrapper_card-titles">
              <p>Order Total:</p>
              <p>Taxes:</p>
              <p>Shipping:</p>

              <p>Subtotal:</p>
            </div>
            <div className="gpt3__cart__container__summery_wrapper_card-results">
              <p>$${totalPrice}</p>
              <p>$1.9</p>
              <p>$ 20 </p>
              <p>${totalPrice + 21.9}</p>
            </div>
          </div>
        </div>
        <a href="/">Checkout</a>
      </div>
    </div>
  );
}

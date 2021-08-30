import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
// import {
//   adjustItemQty,
//   removeFromCart,
// // } from "./";
import { loadproducts } from "../../../redux/Cart/CartThunks";
import { adjustItemQty } from "../../../redux/Cart/CartAction";
// import { adjustItemQty } from "../../../redux/Cart/CartReducer";

const CartItem = ({ item, adjustQty, removeFromCart,cartData }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.productName}</p>
        <p className={styles.details__desc}>{item.specification}</p>
        <p className={styles.details__price}>Rs.{item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.productId)}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt={item.productName}
          />
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
      cartData: state.cart

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(loadproducts(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
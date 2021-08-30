import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import { loadproducts } from "../../redux/Cart/CartThunks";

const Cart = ({ cart,loadproductss }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
console.log(cart.products)
  useEffect(() => {
    let items = 0;
    let price = 0;

    loadproductss(4)
    
    cart.products.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [ totalPrice, totalItems, setTotalPrice, setTotalItems]);
  // cart, totalPrice, totalItems, setTotalPrice, setTotalItems
  return (
    // <h1>hello world</h1>
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.products.map((item) => (
          <CartItem key={item.productId} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      // fetchProductss: (productId) => dispatch(fetctProductById(productId)),
      // addToCarts: (id) => dispatch(addproductcart(id)),
      // addtoCarts:(pid)=>dispatch(addtoCart(pid))
      // fetchProducts: (product) => dispatch(fetchProduct(product)),

      loadproductss:(cid)=>dispatch(loadproducts(cid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


import React from "react";
import "./cart-items.css";

const CartItems = ({ item: { id, imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <div className="mobile-cart-img">
      <img src={imageUrl} alt="item" />
    </div>
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="cart-price">
        {" "}
        <div className="mobile-quantity">{quantity}</div>
        <div className="mobile-price">X ₹{price}</div>
      </span>
    </div>
  </div>
);

export default CartItems;

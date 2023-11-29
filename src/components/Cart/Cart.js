import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";


const Cart = (props) => {

 

  return (
    <Modal onClose={props.onClose}>
      {/* {cartItems} */}
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span></span>
      </div>
      <div>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;









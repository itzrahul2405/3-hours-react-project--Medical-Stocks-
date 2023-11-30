import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import MedicineContext from "../../store/medicine-context";

const Cart = (props) => {
  const medCtx = useContext(MedicineContext);

  const increaseQuantityHandler = (itemId) => {
    medCtx.addToCart(itemId)
  }

  const decreaseQuantityHandler = (itemId) => {
    medCtx.removeFromCart(itemId)
  }

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <ul>
          {medCtx.cartItem.map((cItem, index) => (
            <li key={cItem.id}>
              <div className={classes.liContent}>
                <h2>{cItem.name}</h2>
                <h4>${cItem.price}</h4>
                <p>{cItem.description}</p>
                <button>x {cItem.quantity}</button>
              </div>
              <div className={classes.liBtns}>
                <button onClick={() => increaseQuantityHandler(cItem.id)}>+</button>
                <button onClick={() => decreaseQuantityHandler(cItem.id)}>-</button>
              </div>
            </li>
          ))}
        </ul>
        <span>Total Amount: </span>
        <span>{medCtx.TotalAmount}</span>

        <div className={classes.CartBtn}>
          <button onClick={props.onClose}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

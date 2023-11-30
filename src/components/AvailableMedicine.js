import classes from "./AvailableMedicine.module.css";
import MedicineContext from "../store/medicine-context";
import { useContext, useState } from "react";

const AvailableMedicine = () => {
  const medCtx = useContext(MedicineContext);


  const addItemHandler = (itemId) => {
    medCtx.addToCart(itemId) 
  }

  return (
    <div>
      <h2>Available Medicines: </h2>
      <ul >
        {medCtx.stock.map((stockItem, index) => (
          <li key={stockItem.id}>
             Name: {stockItem.name} Description:{stockItem.description} Price:{stockItem.price} Quantity:{stockItem.quantity}
            <button onClick={() => addItemHandler(stockItem.id)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableMedicine;

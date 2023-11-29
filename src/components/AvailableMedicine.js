import classes from "./AvailableMedicine.module.css";
import MedicineContext from "../store/medicine-context";
import { useContext } from "react";

const AvailableMedicine = () => {
  const medCtx = useContext(MedicineContext);

  return (
    <div>
        <h2>Available Medicines: </h2>
      <ul>
        {medCtx.stock.map((stockItem, index) => (
          <li key={index}>
            Name: {stockItem.name} Description:{stockItem.description} Price:{stockItem.price} Quantity:{stockItem.quantity}
            <button>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableMedicine;

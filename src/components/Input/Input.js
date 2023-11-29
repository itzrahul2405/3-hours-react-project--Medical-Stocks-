import React, { useContext, useState } from "react";
import classes from "./Input.module.css";
import MedicineContext from "../../store/medicine-context";

const Input = () => {

  const medCtx = useContext(MedicineContext)

  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  

  const medicineNameHandler = (event) => {
    setMedicineName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addInStockHandler = (event) => {
    event.preventDefault();

    const newStock = {
      name: medicineName,
      description: description,
      price: price,
      quantity: quantity
    };

    // console.log(newStock);
    medCtx.addStock(newStock)

    setMedicineName('')
    setDescription('')
    setPrice('')
    setQuantity('')
    
  };

  return (
    <form onSubmit={addInStockHandler}>
      <label htmlFor="medicine-name">Medicine Name: </label>
      <input type="text" id="medicine-name" name="MedicineName"  className={classes.name} placeholder="Enter Medicine Name" value={medicineName} onChange={medicineNameHandler} />

      <label htmlFor="description">Description: </label>
      <input type="text" id="description" name="Description"  className={classes.description} placeholder="Enter Description" value={description} onChange={descriptionHandler} />

      <label htmlFor="price">Price: </label>
      <input type="number" min={0} id="price" name="Price"  className={classes.price} placeholder="Enter Price" value={price} onChange={priceHandler} />

      <label htmlFor="quantity-available">Quantity Available: </label>
      <input type="number" id="quantity-available" name="Quantity"  className={classes.quantity} placeholder="Enter Quantity" value={quantity} onChange={quantityHandler} />

      <button type="submit" >Add Product</button>
    </form>

  );
};

export default Input;

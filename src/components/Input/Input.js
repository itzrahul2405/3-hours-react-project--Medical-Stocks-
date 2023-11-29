import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = () => {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [stock, setStock] = useState([])

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
      quantity: quantity,
    };

    // console.log(newStock);
    setStock([...stock, newStock])
    console.log(stock)
  };

  return (
    <form onSubmit={addInStockHandler}>
      <label htmlFor="medicine-name">Medicine Name: </label>
      <input type="text" id="medicine-name" onChange={medicineNameHandler} />

      <label htmlFor="description">Description: </label>
      <input type="text" id="description" onChange={descriptionHandler} />

      <label htmlFor="price">Price: </label>
      <input type="number" min={0} id="price" onChange={priceHandler} />

      <label htmlFor="quantity-available">Quantity Available: </label>
      <input type="number" id="quantity-available" onChange={quantityHandler} />

      <button type="submit" >Add Product</button>
    </form>
  );
};

export default Input;

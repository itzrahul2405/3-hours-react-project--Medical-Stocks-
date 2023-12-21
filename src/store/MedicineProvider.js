import React, { useEffect, useState } from "react";
import MedicineContext from "./medicine-context";

const MedicineProvider = (props) => {
  const [stock, setStock] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


  const addStockHandler = async (newStock) => {
    try {
      const response = await fetch('https://crudcrud.com/api/0155889c784e4a80a1ed5d2b3118d7d1/medstock', {
        method: "POST",
        body: JSON.stringify(newStock),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to add stock");
      }
      const data = await response.json();
      console.log(data);
    } 
    catch(error){
      console.log("Error adding stock:", error.message);
    }
    
  };

  const getData = async() => {
    const response = await fetch('https://crudcrud.com/api/0155889c784e4a80a1ed5d2b3118d7d1/medstock');
    const data = await response.json();
    
    console.log('this is get data', data)
    data.map(d => (
      setStock([...stock, {name: d.name, description: d.description, price: d.price, quantity: d.quantity}])
    ))

    // getData()
  }

  useEffect(() => {
    getData()
  },[])


  const addToCartHandler = (itemId) => {

    let newItem;
    if(typeof(itemId) === 'string' && itemId.slice(-4)==='cart'){
        newItem = stock.find((stockItem) => stockItem.id === Number(itemId.slice(0,-4)));
    }
    else{
        newItem = stock.find((stockItem) => stockItem.id === itemId);
    }
    // above we give conditions because we are taking itemId from 2 components (AvailableMedicine.js and cart.js), 
    // from AvailableMedicine.js we are getting id as stockItem.id which is numeric and can be easily find in stock but 
    // from cart.js we are getting id as id+'cart' which is string and cann't be easily find in stock 


    // checking item is already in cart or not
    const existingItem = cartItems.find((cartItem) => cartItem.id === newItem.id+'cart')
    if(!existingItem){
        setCartItems([...cartItems, {id: newItem.id+'cart', name: newItem.name, description: newItem.description, price: newItem.price, quantity: 1}]);
    }
    else{
        setCartItems(cartItems.map((cartItem) => (
            existingItem.id === cartItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )))
    }


    // increasing total amount while adding in cart
    setTotalAmount((prevTotalAmount)=>{
        return Number(prevTotalAmount)+Number(newItem.price)
    })

    //  decrese quantity in stock while adding in cart
    setStock(stock.map((stockItem) => (
        stockItem.id === newItem.id ? {...stockItem, quantity: stockItem.quantity - 1} : stockItem
    )))
  };


  const removeFromCartHandler = (itemId) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemId)

    if(existingItem.quantity > 1){
        setCartItems(cartItems.map((cartItem) => (
            cartItem.id === existingItem.id ? {...cartItem, quantity: cartItem.quantity-1}  : cartItem
        )))
    }
    else{
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
        // setCartItems((cartItems.filter((cartItem) => cartItem.id != itemId)))
    }

    setTotalAmount((prevTotalAmount) => {
        return Number(prevTotalAmount) - Number(existingItem.price)
    })

    setStock(stock.map((stockItem) => (
        stockItem.id === Number(existingItem.id.slice(0, -4)) ? {...stockItem, quantity: stockItem.quantity + 1}  : stockItem
    )))
  }



  const medicineContext = {
    stock: stock,
    addStock: addStockHandler,
    cartItem: cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    TotalAmount: totalAmount
  };

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;













// const addToCartHandler = (itemId) => {
    // first approach (Use when expecting multiple items with the same itemId in the result.)
    // setCartItems([...cartItems, stock.filter((item) => (
    //     item.id === itemId
    // ))])

    // second approach (Similar to the first approach, use when a block syntax is preferred.)
    // setCartItems([...cartItems, stock.filter((item) => {
    //   return item.id === itemId
    // })])

    // third approach (Use when expecting a single item with the specified itemId and direct access to that item without indexing.)
    // const newItem = stock.find((item) => item.id === itemId);
    // setCartItems([...cartItems, {id: newItem.id+'cart', name: newItem.name, description: newItem.description, price: newItem.price, quantity: 1}]);
//   };
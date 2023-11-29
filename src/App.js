import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Cart from "./components/Cart/Cart";
import MedicineProvider from "./store/MedicineProvider";
import AvailableMedicine from "./components/AvailableMedicine";

function App() {

  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <MedicineProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Input />
      <AvailableMedicine />
    </MedicineProvider>
  );
}

export default App;

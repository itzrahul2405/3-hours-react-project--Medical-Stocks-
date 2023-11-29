import classes from "./Header.module.css";
import Cart from "../Cart/Cart";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <h2>Medicine Stock Arranger</h2>
      <button className={classes.cartBtn} onClick={props.onShowCart}>Cart</button>
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import "./Style.css"
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const { totalItem } = useContext(AppContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping </h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart-logo" />
          <p>{totalItem}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;

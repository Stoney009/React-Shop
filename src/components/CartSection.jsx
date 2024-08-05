import React from "react";
import Cart from "./Cart";
import carts from "../data/carts";

const CartSection = () => {
  
  return (
    <div className="  flex-grow ">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
        
      ))}
      
    </div>
  );
};

export default CartSection;

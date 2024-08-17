import React from "react";
import Cart from "./Cart";
import useCartStore from "../store/useCartStore";

const CartSection = () => {

  const { carts } = useCartStore();
  
  return (
    <div className="  flex-grow ">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
        
      ))}
      
    </div>
  );
};

export default CartSection;

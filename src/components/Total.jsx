import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";

const Total = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();
  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find((el) => el.id == cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;
  return (
    <div className="">
      <div className="border-t border-t-black grid grid-cols-6 text-end p-5  my-5">
        <div className="col-span-1 col-start-4">
          <p className="text-gray-500">Total ($) </p>
          <p className="font-bold text-lg">{total.toFixed(2)}</p>
        </div>
        <div className="col-span-1">
          <p className="text-gray-500">Tax (10%) </p>
          <p className="font-bold text-lg">{tax.toFixed(2)}</p>
        </div>
        <div className=" col-span-1">
          <p className="text-gray-500">Net Total ($) </p>
          <p className="font-bold text-lg">{(total + tax).toFixed(2)}</p>
        </div>
      </div>
      <div className="text-end mb-5">
        <Link className=" rounded-md hover:text-white hover:bg-black border border-black mb-5 px-4 py-2">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Total;

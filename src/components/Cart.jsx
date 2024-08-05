import React from "react";

const Cart = ({
  cart: {
    id,
    quantity,
    cost,
    product: { image, title, price, category, description },
  },
}) => {
  return (
    <div className="border px-5 py-3 grid grid-cols-6 items-center mb-5">
      <img className="h-20 w-full object-contain col-span-1" src={image} alt="" />
      <div className=" col-span-3 ">
        <h3 className=" ">{title}</h3>
        <p className="text-gray-500">
          Price <span className="font-semibold text-black">$({price})</span>
        </p>
      </div>
      <div className="col-span-1  items-end">
        <div className="flex flex-col gap-2">
        <p className="text-gray-600 text-xl">Quantity</p>
        <div className="flex justify-items-start gap-4 items-center">
            <button className="bg-black px-2 py-1 rounded-full text-xs text-white">-</button>
            <p className="">{quantity}</p>
            <button className="bg-black px-2 py-1 rounded-full text-xs text-white">+</button>
        </div>
        </div>
      </div>
      <p className="col-span-1 text-xl font-bold text-end">${cost}</p>
    </div>
  );
};

export default Cart;

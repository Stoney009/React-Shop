import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    category,
    description,
    rating: { rate, count },
  },
}) => {
  return (
    <div className="border border-black p-4  rounded-md flex flex-col  items-start">
      <img src={image} className="lg:h-32 h-24 md:h-28 mb-3 " alt="" />
      <h2 className="font-semibold mb-1 text-lg line-clamp-1"> {title}</h2>
      <p className="line-clamp-2 tex-xs text-gray-500 mb-4">{description}</p>
      <div>
        <Rating rate ={rate} />
      </div>
      <div className="flex justify-between w-full items-baseline mt-auto">
        <p>${price}</p>
        <button className="px-4 py-2 border border-black  text-xs  rounded-lg hover:bg-black hover:text-white duration-200 transition-all ease-in-out">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

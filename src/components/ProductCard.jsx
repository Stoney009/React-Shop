import React from "react";
import Rating from "./Rating";
import useCartStore from "../store/useCartStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
  const { carts, addCart } = useCartStore();
  const handleAddCart = (e) => {
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    e.stopPropagation();
    addCart(newCart);
    toast.success('Successfully added!');
  };
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/product-detail/${id}`);
  };
  const handleAdded = (e) => {
    e.stopPropagation();
    toast.success('This item is already added!',{
      position: 'bottom-left',
    });
  };
  return (
    <div
      onClick={handleDetail}
      className="border  border-black p-4  rounded-md flex flex-col  items-start"
    >
      <img src={image} className=" h-24 md:h-28 mb-3 " alt="" />
      <h2 className="font-semibold mb-1 text-lg line-clamp-1"> {title}</h2>
      <p className="line-clamp-2 tex-xs text-gray-500 mb-4">{description}</p>

      <Rating rate={rate} />

      <div className="flex justify-between w-full items-baseline mt-auto">
        <p>${price}</p>
        {carts.find((cart) => cart.productId == id) ? (
          <button
            onClick={handleAdded}
            className={"bg-black px-2 py-1 rounded-md text-sm text-white"}
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className={
              "border active:scale-105 duration-150 border-black px-2 py-1 rounded-md text-sm"
            }
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

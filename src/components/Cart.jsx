import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { quantityHandler, removeCart } = useCartStore();
  const handleIncrease = () => {
    quantityHandler(id, 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      quantityHandler(id, -1);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.error("Removed from cart");
        }
      });
    }
  };

  const product = products.find((el) => el.id === productId);
  console.log(product);
  const cost = product.price * quantity;

  return (
    <div className="border px-5 py-3 grid grid-cols-6 items-center mb-5">
      <img
        className="h-20 w-full object-contain col-span-1"
        src={product.image}
        alt=""
      />
      <div className=" col-span-3 ">
        <h3 className=" ">{product.title}</h3>
        <p className="text-gray-500">
          Price
          <span className="font-semibold text-black">$({product.price})</span>
        </p>
      </div>
      <div className="col-span-1  items-end">
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 text-xl">Quantity</p>
          <div className="flex justify-items-start gap-4 items-center">
            <button
              onClick={handleDecrease}
              className="bg-black px-2 py-1 rounded-full text-xs text-white"
            >
              -
            </button>
            <p className="">{quantity}</p>
            <button
              onClick={handleIncrease}
              className="bg-black px-2 py-1 rounded-full text-xs text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <p className="col-span-1 text-xl font-bold text-end">${cost}</p>
    </div>
  );
};

export default Cart;

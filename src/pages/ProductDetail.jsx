import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { addCart, carts } = useCartStore();
  const { productId } = useParams();
  console.log(productId);

  const currentProduct = products.find((product) => product.id == productId);
  console.log(currentProduct);
  const handleDetailAdd = () => {
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };
  return (
    <>
      <Breadcrumb currentPage="Product Detail" />
      <div className="border border-black py-5 px-10 my-4 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2  justify-between items-center">
          <div className=" ">
            <img
              className="lg:h-[400px] h-[300px] w-full object-contain items-center "
              src={currentProduct.image}
              alt=""
            />
          </div>
          <div className="flex flex-col  ">
            <div className="flex flex-col  items-start mb-3">
              <p className="md:text-3xl  text-lg font-semibold mb-2 md:mb-4 ">
                {currentProduct.title}
              </p>
              <p className="text-gray-100 rounded-md text-xs md:text-lg lg:text-xl bg-gray-600  px-2 py-1 ">
                {currentProduct.category}
              </p>
            </div>
            <p className="text-gray-800 md:text-xl     mb-2">
              {currentProduct.description}
            </p>
            <Rating rate={currentProduct.rating.rate} />
            <div className=" flex justify-between h-full  w-full mt-6">
              <p className="text-xl font-bold ">${currentProduct.price}</p>
              {carts.find((cart) => cart.productId == currentProduct.id) ? (
                <button
                  className={"bg-black px-2 py-1 rounded-md text-sm text-white"}
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleDetailAdd}
                  className={
                    "border active:scale-105 duration-150 border-black px-2 py-1 rounded-md text-sm"
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

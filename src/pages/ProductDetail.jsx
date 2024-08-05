import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);

  const currentProduct = products.find((product) => product.id == productId);
  console.log(currentProduct);
  return (
    <>
      <Breadcrumb currentPage="Product Detail"/>
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
              <Link
                to={"/my-cart"}
                className="px-4 py-2 border border-black  text-xs  rounded-lg hover:bg-black hover:text-white duration-200 transition-all ease-in-out"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

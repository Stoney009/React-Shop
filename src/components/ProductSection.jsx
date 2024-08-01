import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section className="mb-5">
      <h3 className="font-semibold mb-2 text-lg text-gray-500 mt-2">Products Available</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

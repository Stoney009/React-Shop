import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/ useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();
  const currentCategory = categories.find((el) => el.isActive === true);

  return (
    <section className="mb-5">
      <h3 className="font-semibold mb-2 text-lg text-gray-500 mt-2">
        Products Available
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products
          .filter(
            (el) =>
              currentCategory.name === "All" ||
              el.category === currentCategory.name
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ProductSection;

import React from "react";
import CategoryButton from "./CategoryButton";
import useCategoryStore from "../store/ useCategoryStore";

const CategorySection = () => {
  const { categories } = useCategoryStore();
  const title = "Product Categories";
  return (
    <section className="mb-3">
      <h3 className="font-semibold mb-2 text-lg text-gray-500">{title}</h3>
      <div className="flex overflow-scroll category-button">
        {categories.map((category) => (
          <CategoryButton key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

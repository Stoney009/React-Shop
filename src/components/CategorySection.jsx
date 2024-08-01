import React from "react";
import categories from "../data/categories";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Product Categories";
  return (
    <section className="mb-3">
      <h3 className="font-semibold mb-2 text-lg text-gray-500">{title}</h3>
      <div className="flex overflow-scroll category-button">
        <CategoryButton category="All" current={true}/>
        {categories.map((category) => (
          <CategoryButton key={category} category={category} current={false} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

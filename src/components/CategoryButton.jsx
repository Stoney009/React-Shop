import React from "react";
import useCategoryStore from "../store/ useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handelCategory = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={handelCategory}
      className={`px-4 py-1 text-sm md:text-xl  border border-black me-2 rounded-xl text-nowrap ${
        isActive && "bg-black text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;

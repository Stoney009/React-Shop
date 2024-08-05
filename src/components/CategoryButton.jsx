import React from "react";

const CategoryButton = ({ category, current }) => {
   return <button className={`px-4 py-1 text-sm md:text-xl  border border-black me-2 rounded-xl text-nowrap ${current && "bg-black text-white"}`}>{category}</button>;
};

export default CategoryButton;

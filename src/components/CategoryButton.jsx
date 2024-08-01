import React from "react";

const CategoryButton = ({ category, current }) => {
   return <button className={`px-6 py-2 text-2xl  border border-black me-2 rounded-xl text-nowrap ${current && "bg-black text-white"}`}>{category}</button>;
};

export default CategoryButton;

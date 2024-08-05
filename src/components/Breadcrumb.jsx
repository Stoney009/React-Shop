import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className=" flex gap-3   px-2 py-1 ">
      <Link className="text-gray-500" to={"/"}>Home</Link>
      <span>/</span>
      <p>{currentPage}</p>
    </div>
  );
};

export default Breadcrumb;

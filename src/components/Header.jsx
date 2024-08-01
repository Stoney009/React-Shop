import React from "react";

const Header = () => {
  return <div className="flex justify-between items-center mb-2">
    <header className="text-3xl font-semibold mb-3">ORACLE</header>
    <button className="px-4 py-2 border border-black   rounded-lg hover:bg-black hover:text-white duration-200 transition-all ease-in-out relative" >My Cart <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">1</span></button>
  </div>;
};

export default Header;

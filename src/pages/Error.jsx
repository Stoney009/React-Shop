import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-gray-100 flex bg-gradient-to-tr from-red-100  via-lime-100 to-yellow-100  flex-col h-screen gap-5 items-center justify-center">
      <p className="text-6xl font-bold text-neutral-800   ">Page Not Found</p>
      <Link to={"/"} className="px-4 py-2 border text-2xl border-black    rounded-xl bg-black text-white">
        Go Home
      </Link>
    </div>
  );
};

export default Error;

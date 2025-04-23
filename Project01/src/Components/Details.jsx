import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] min-h-screen m-auto p-[10%] flex justify-between items-center">
      <img
        className="object-contain h-[80%] w-[40%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Fjallraven Backpack"
      />
      <div className="content w-[50%]">
        <h1 className="text-2xl font-semibold mb-2">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-400 my-2">men's clothing</h3>
        <h2 className="text-red-300 font-medium mb-3">$ 109.95</h2>
        <p className="text-gray-600 mb-4">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, along with your everyday
          essentials.
        </p>
        <div className="flex gap-4">
          <Link
            to="/edit"
            className="px-4 py-1 border border-blue-400 text-blue-500 rounded hover:bg-blue-100"
          >
            Edit
          </Link>
          <Link
            to="/delete"
            className="px-4 py-1 border border-red-300 text-red-400 rounded hover:bg-red-100"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;

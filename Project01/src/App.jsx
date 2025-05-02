import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Create from "./Components/Create";

const App = () => {
  const { search, pathname } = useLocation();
  // console.log(pathname, search);

  return (
    <div className="h-screen w-screen flex">
      {(pathname !== "/" || search.length > 0) && (
        <Link to="/" className="text-black font-semibold rounded border border-black shadow py-1 px-3 absolute left-[17%] top-[3%] bg-slate-600 text-white">
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
};

export default App;

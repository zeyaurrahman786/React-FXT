import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen flex">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

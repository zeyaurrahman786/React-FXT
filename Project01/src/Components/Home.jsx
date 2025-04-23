import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center mr-3 mb-3">
          <Link to="/details/1" className="w-full h-full flex flex-col justify-center items-center">
            <div
              className="image w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
              }}
            ></div>
            <h1 className="hover:text-blue-300">Lorem ipsum dolor sit</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);
  // console.log(products);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        
        {/* Mapping through the products array to display each product */}
        {products.map((product) => (
          <Link
            to={`/details/${product.id}`}
            key={product.id}
            className="card w-[18%] h-[40vh] mr-3 mb-3 p-3 border shadow rounded flex flex-col justify-center items-center"
          >
            <div
              className="image w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300">{product.title}</h1>
          </Link>
        ))}

      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

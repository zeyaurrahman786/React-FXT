import React from "react";
import Card from "./Card.jsx";
import "./App.css";
import Button from "./Button.jsx";
import Product from "./Product.jsx";
import Title from "./Title.jsx";

const App = () => {
  const handleClick = (btnName) => {
    alert(`Hello World ${btnName}`);
  };

  return (
    <div>
      {/* <Card /> */}
      <Button name={"Save"} onClick={() => handleClick("Save")} />
      <Button name={"Click Me"} />
      
      <Product
        productDetails={"Product 1"}
        product={{ name: "Laptop", price: 999, description: "A high-end laptop" }}
        buttonName="Add to Cart"
      />

      <Product
        productDetails={"Product 2"}
        product={{ name: "Mobile", price: 500, description: "A smartphone" }}
        buttonName="Buy Now"
      />

      <Title />
      <h1></h1>
    </div>
  );
};

export default App;

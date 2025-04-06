import React from "react";
import Product from "./Product";

const Title = () => {
  return (
    <div>
      <Product
        productDetails={"Product 3"}
        product={{
          name: "Tablet",
          price: 399,
          description: "A high-end tablet",
        }}
        buttonName={"Save For Later"}
      />
      <Product
        productDetails={"Product 4"}
        product={{
          name: "Smartwatch",
          price: 199,
          description: "A smartwatch",
        }}
        buttonName={"Ignore It"}
      />
    </div>
  );
};

export default Title;

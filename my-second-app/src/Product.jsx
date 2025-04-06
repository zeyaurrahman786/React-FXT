import Button from "./Button";
import "./Product.css";
export default function Product({ product, productDetails, buttonName }) {
  return (
    <div className="product">
      <h1>{productDetails}</h1>
      <h2>{product.name}</h2>
      <p>Price: Rs.{product.price}</p>
      <p>Description: {product.description}</p>
      <button>{buttonName || "Buy Now"}</button>
    </div>
  );
}
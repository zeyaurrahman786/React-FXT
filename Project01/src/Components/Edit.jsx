import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((product) => product.id == id)[0]);
  }, [id]);
  // console.log(product);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 5 characters.");
      return;
    }
    // console.log(product);

    const productIndex = products.findIndex((product) => product.id == id);

    const copyData = [...products];
    copyData[productIndex] = { ...products[productIndex], ...product };

    // console.log(product, productIndex);
    console.log(copyData);

    // setProducts([...products, product]);
    setProducts(copyData);
    localStorage.setItem(
      "products",
      JSON.stringify("products", JSON.stringify(copyData))
    );
    navigate(-1);
    // console.log(product);
  };
  // console.log(products);

  return (
    <form
      onSubmit={AddProductHandler}
      className="w-screen h-screen p-[5%] flex flex-col items-center"
    >
      <h1 className="w-1/2 text-3xl mb-5">Edit Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-xl bg-zinc-100 rounded w-1/2 mb-3 p-2"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-2"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded w-[48%] mb-3 p-2"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded w-[48%] mb-3 p-2"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>

      <textarea
        type="text"
        placeholder="enter product description here..."
        rows="5"
        className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-2"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
      />

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Edit;

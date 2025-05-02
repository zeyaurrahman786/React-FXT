import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useContext(ProductContext);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 5 characters.");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    // toast.success("New Product Added Successfully");
    // console.log(product);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="w-screen h-screen p-[5%] flex flex-col items-center"
    >
      <h1 className="w-1/2 text-3xl mb-5">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-xl bg-zinc-100 rounded w-1/2 mb-3 p-2"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded w-[48%] mb-3 p-2"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded w-[48%] mb-3 p-2"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        type="text"
        placeholder="enter product description here..."
        rows="5"
        className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;

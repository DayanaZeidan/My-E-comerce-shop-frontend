import React, { useState } from "react";
import "./Createpage.css";
import axios from "axios";
import Update from "./Update/Update";
import Delete from "./Delete/Delete";

function Createpage() {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDes = (e) => {
    setDes(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  const create = (e) => {
    e.preventDefault();
    //initialze a new form-data (built in javascript)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", des);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("picture", picture);
    axios
      .post("http://localhost:5000/products/create", formData)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={create}>
        <input type="text" placeholder="name" onChange={handleName} />
        <textarea placeholder="description" onChange={handleDes} />
        <input type="number" placeholder="price" onChange={handlePrice} />
        <input type="text" placeholder="category" onChange={handleCategory} />
        <input type="file" onChange={handleFile} />
        <button type="submit">Submit</button>
      </form>
      <h2>Update Product</h2>
      <Update />
      <Delete />
    </div>
  );
}

export default Createpage;

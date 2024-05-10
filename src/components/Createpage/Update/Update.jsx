import React, { useState } from "react";
import "./Update.css";
import axios from "axios";

function Update() {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDes = (e) => {
    setDes(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const update = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:5000/products/update", {
        id: id,
        name: name,
        description: des,
        price: price,
      })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={update}>
      <input type="number" placeholder="id" onChange={handleId} />
      <input type="text" placeholder="name" onChange={handleName} />
      <textarea placeholder="description" onChange={handleDes} />
      <input type="number" placeholder="price" onChange={handlePrice} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Update;

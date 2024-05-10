import React, { useEffect, useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Item(props) {
  const item = props.item;

  return (
    <div className="item">
      <Link to={`/${item.category}/${item.id}`}>
        <img src={`http://localhost:5000/${item.image_path}`} alt="" />
      </Link>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div className="item-prices">
        <div className="item-prices-new">${item.price}</div>
      </div>
    </div>
  );
}

export default Item;

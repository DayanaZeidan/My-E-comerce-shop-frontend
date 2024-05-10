import axios from "axios";
import React, { useEffect, useState } from "react";

function Cartitem(props) {
  const Listitem = props.item;
  const [item, setItem] = useState({});

  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/Products/getbyid/${Listitem.product_id}`)
    //   .then((res) => {
    //     setItem(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
    .get(`http://localhost:5000/Products/getbyid/${1}`)
    .then((res) => {
      setItem(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default Cartitem;

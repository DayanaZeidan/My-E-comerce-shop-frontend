import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import Cartitem from "./Cartitem/Cartitem";

function CartPage() {
  const [user, setUser] = useContext(UserContext);
  const [list, setList] = useState([]); //list of all cart items for the logged in user

  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/Cart/get/${user.id}`)
    //   .then((res) => {
    //     setList(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
    .get(`http://localhost:5000/Cart/get/${1}`)
    .then((res) => {
      setList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>
      {list.map((item, i) => {
        return <Cartitem key={i} item={item} />;
      })}
    </div>
  );
}

export default CartPage;

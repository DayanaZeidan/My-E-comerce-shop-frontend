import React, { useContext } from "react";
import "./ProductPage.css";
import { LoginContext, UserContext } from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductPage(props) {
  const product = props.product;
  const [login, setlogin] = useContext(LoginContext);
  const [user, setUser] = useContext(UserContext);
  console.log(product);

  const addtoCart = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Cart/addtoCart", {
        // user_id: user.id,
        user_id: 1,
        product_id: product.id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="product-display">
      <div className="product-display-left">
        {/* <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        {/* <div className="product-display-img">
          <img className="product-main-img" src={product.image} alt="" />
        </div> */}
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-star">
          <img src="/Assets/star_icon.png" alt="" />
          <img src="/Assets/star_icon.png" alt="" />
          <img src="/Assets/star_icon.png" alt="" />
          <img src="/Assets/star_icon.png" alt="" />
          <img src="/Assets/star_dull_icon.png" alt="" />
        </div>
        <div className="product-right-prices">
          <div className="product-prices">${product.price}</div>
        </div>
        <div className="product-right-size">
          <h1>Select Size</h1>
          <div className="product-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        {/* {
          login ? <button onClick={addtoCart}>Add to Cart</button> : <Link to={"/login"}>please login in for adding to cart</Link>
        } */}
        <button onClick={addtoCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;

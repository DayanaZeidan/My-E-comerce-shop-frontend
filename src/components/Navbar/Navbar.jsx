import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import Cookie from 'js-cookie'
import { useCookies } from "react-cookie";

function Navbar() {
  //create usestate to set menu selection
  const [menu, setMenu] = useState("");
  const [login, setlogin] = useContext(LoginContext);
  const [, setCookie] = useCookies(["token"]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={"/Assets/brand-logo.png"} alt="" />
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu == "Home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu == "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu == "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Contact-Us">
            Contact
          </Link>
          {menu == "contact" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {login ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setlogin(false);
              // Cookie.remove("token");
              setCookie("token", null)
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={"/Assets/shopping-bag.png"} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;

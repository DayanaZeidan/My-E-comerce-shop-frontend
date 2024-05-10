import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import Cookie from "js-cookie";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useCookies } from "react-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useContext(UserContext);
  const [login, setLogin] = useContext(UserContext);
  const [, setCookie] = useCookies(["token"]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Users/login", {
        username: username,
        password: pass,
      })
      .then((res) => {
        setLogin(true);
        setUser(res.data.user);
        // Cookie.set("token", res.data.token);
        setCookie("token", res.data.token);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-template">
      <div className="formbox">
        <form onSubmit={Submit}>
          <div className="header">
            <h1>Welcome</h1>
            <p>Sign in to your account</p>
          </div>

          <div className="registration">
            <p>
              Don't have an account? <Link to={"/register"}>Sign up</Link>
            </p>
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsername}
              required
            />
            <FaUserAlt className="icon" />
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                onChange={handlePass}
                required
              />
              <FaLock className="icon" />
            </div>
          </div>

          <div className="forget-pass">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to={"/forget"}>Forget password?</Link>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

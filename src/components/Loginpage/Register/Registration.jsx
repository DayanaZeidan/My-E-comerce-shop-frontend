import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function Registration() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const Register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Users/register", {
        name: name,
        username: username,
        password: pass,
        role: role,
      })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register-template">
      <div className="box">
        <form onSubmit={Register}>
          <div className="header">
            <h1>Create an account</h1>
          </div>

          <div className="registration">
            <p>
              Already have an account? <Link to={"/login"}>Sign In</Link>
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
            <div className="input-box">
              <input
                type="text"
                placeholder="First name"
                onChange={handleName}
                required
              />
              <AiOutlineUser className="icon" />
            </div>
            <select placeholder="Role" onChange={handleRole}>
              <option value={"Admin"}>Admin</option>
              <option value={"Editor"}>Editor</option>
              <option value={"Subscriber"}>Subscriber</option>
            </select>
            <button type="submit">Create An Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;

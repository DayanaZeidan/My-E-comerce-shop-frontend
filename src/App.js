import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import ShopCategory from "./components/ShopCategory/ShopCategory";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import ProductPage from "./components/ProductPage/ProductPage";
import axios from "axios";
// import Createpage from "./components/Createpage/Createpage";
import Cookie from "js-cookie";
import Login from "./components/Loginpage/Login/Login";
import { CookiesProvider, useCookies } from "react-cookie";
import Registration from "./components/Loginpage/Register/Registration";
import CartPage from "./components/CartPage/CartPage";

export const LoginContext = React.createContext();
export const ProductContext = React.createContext();
export const newcollectionContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  const [login, setlogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [newColllection, setnewColllection] = useState([]);
  const [user, setUser] = useState({});
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Products/get")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //everytime we refresh the page
  useEffect(() => {
    // const token = Cookie.get("token"); //searching in frontend cookies for a cookie called token
    if (cookies.token) {
      axios
        .post("http://localhost:5000/Users/getuser", {
          token: cookies.token, //this is the token that the backend wants to decode it
        })
        .then((res) => {
          setlogin(true);
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cookies]);

  return (
    <div>
      <CookiesProvider>
      <LoginContext.Provider value={[login, setlogin]}>
        <UserContext.Provider value={[user, setUser]}>
          <ProductContext.Provider value={[products, setProducts]}>
            <newcollectionContext.Provider
              value={[newColllection, setnewColllection]}
            >
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route
                    path="/mens"
                    element={
                      <ShopCategory
                        banner={"/Assets/banner_mens.png"}
                        category="men"
                      />
                    }
                  />
                  <Route
                    path="/womens"
                    element={
                      <ShopCategory
                        banner={"/Assets/banner_women.png"}
                        category="women"
                      />
                    }
                  />
                  <Route path="/Contact-Us" element={<Footer />} />
                  {/* <Route path="/product" element={<Product />} />
                <Route path=":productId" element={<Product />} /> */}
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Registration/>} />
                  <Route path="/forget" />
                  {/* <Route path="/create" element={<Createpage />} /> */}

                  {products.map((product, i) => {
                    return (
                      <Route
                        key={i}
                        path={`/${product.category}/${product.id}`}
                        element={<ProductPage product={product} />}
                      />
                    );
                  })}
                </Routes>
              </BrowserRouter>
            </newcollectionContext.Provider>
          </ProductContext.Provider>
        </UserContext.Provider>
      </LoginContext.Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;

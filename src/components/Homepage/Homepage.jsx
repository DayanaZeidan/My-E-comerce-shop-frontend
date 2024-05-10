import React from "react";
import "./Homepage.css";
import Hero from "./Hero/Hero";
import Offers from "./Offers/Offers";
import Popular from "./Popular/Popular";
import Newcollections from "./NewCollections/NewCollections";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Homepage() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;

// import React, { useContext } from 'react'
// import { ProductsContext } from '../../App'

// function Homepage() {
//     const [products, setProducts] = useContext(ProductsContext);
//   return (
//     <div>
//         {
//             products.map((product, i)=>{
//                 return <p key={i}>{product.name}</p>
//             })
//         }
//     </div>
//   )
// }

// export default Homepage

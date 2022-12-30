import React, { useEffect, useState } from "react";
import "./Products.css";
import Logo from "../assets/images/armadaLogoTransparent copy.webp";
import { Link } from "react-router-dom";
import RegNav from "../components/RegNav";
import Axios from "axios";
import PriceFilterButton from "../components/FilterButton";

function Products() {
  const [productInfo, setProductInfo] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/").then((response) => {
  //     setProductInfo(response.data);
  //   });
  // }, []);

  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img className="armada_logo" src={Logo} alt="Armada Logo" />
        </Link>
      </div>
      <RegNav />
      <PriceFilterButton />
    </div>
  );
}

export default Products;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FilterButton.css";

const PriceFilterButton = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);

  const getProducts = (category) => {
    const url = category
      ? `http://localhost:3001/filtered${category}`
      : "http://localhost:3001/allProducts";
    axios
      .get(url, {})
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="filter_btns">
        <button className="all_btn" onClick={() => getProducts()}>
          All
        </button>
        <button className="tops_btn" onClick={() => getProducts("Tops")}>
          Tops
        </button>
        <button className="bottoms_btn" onClick={() => getProducts("Bottoms")}>
          Bottoms
        </button>
        <button
          className="accessory_btn"
          onClick={() => getProducts("Accessories")}
        >
          Accessories
        </button>
        <button className="shoes_btn" onClick={() => getProducts("Shoes")}>
          Shoes
        </button>
      </div>

      {products.map((products) => (
        <div key={products.id}>
          <div className="product_card">
            <img src={products.image} alt="Product" />
            <div className="productInfo">
              <h1>{products.productName}</h1>
              <h3>${products.price}</h3>
              <p>{products.description}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceFilterButton;

import React, { useState, useEffect } from "react";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  function shortenTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  }
  // Fetch data using useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const [likedProducts, setLikedProducts] = useState([]);

  const handleLikeToggle = (productId) => {
    setLikedProducts((prevLiked) => {
      if (prevLiked.includes(productId)) {
        return prevLiked.filter((id) => id !== productId);
      }
      return [...prevLiked, productId];
    });
  };

  return (
    <div className="product-page">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="card-data">
              <h4 className="product-name">
                {shortenTitle(product.title, 20)}
              </h4>

              <button
                className={`like-button ${
                  likedProducts.includes(product.id) ? "liked" : ""
                }`}
                onClick={() => handleLikeToggle(product.id)}
              >
                {likedProducts.includes(product.id) ? "❤️" : "🤍"}
              </button>
            </div>
            <p>sign in or ?login</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

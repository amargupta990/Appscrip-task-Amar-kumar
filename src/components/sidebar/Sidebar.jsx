import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const categories = ["All", "Electronics", "Clothing"];
  const subcategories = {
    Electronics: ["Phones", "Laptops", "TV"],
    Clothing: ["Shirts", "Pants", "Jackets"],
  };

  return (
    <div className="sidebar">
      <h2>Customise</h2>

      <div className="filter">
        <label htmlFor="category">Ideal for</label>
        <select className="selectside" id="category" name="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="category">occasion</label>
        <select className="selectside" id="category" name="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="category">work</label>
        <select className="selectside" id="category" name="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="category">Fabric</label>
        <select className="selectside" id="category" name="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <label htmlFor="subcategory">Segment</label>
        <select className="selectside" id="subcategory" name="subcategory">
          <option value="all">All</option>
          {Object.keys(subcategories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="subcategory">Sutaible for</label>
        <select className="selectside" id="subcategory" name="subcategory">
          <option value="all">All</option>
          {Object.keys(subcategories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="subcategory">Raw-material</label>
        <select className="selectside" id="subcategory" name="subcategory">
          <option value="all">All</option>
          {Object.keys(subcategories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="subcategory">pattern</label>
        <select className="selectside" id="subcategory" name="subcategory">
          <option value="all">All</option>
          {Object.keys(subcategories).map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;

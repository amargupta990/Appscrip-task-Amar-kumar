import React, { useState } from "react";
import "./subheader.css";

const SubHeader = () => {
  const [showFilterButton, setShowFilterButton] = useState(true);

  // Toggle filter button visibility
  const toggleFilterButton = () => {
    setShowFilterButton(!showFilterButton);
  };

  return (
    <div className="subheader">
      <span>
        <p>325 items</p>
        <div>
          <button onClick={toggleFilterButton}>
            {showFilterButton ? "Hide Sidebar" : "Show Sidebar"}
          </button>
        </div>
      </span>

      <select className="select-div" name="choice">
        <option value="first" selected>
          RECOMMENDATION
        </option>
        <option value="second">Newest</option>
        <option value="third">Popular</option>
        <option value="fourth">Low to high</option>
        <option value="fifth">High to low</option>
        <option value="sixth">Winter</option>
        <option value="seventh">Fashion wear</option>
      </select>
    </div>
  );
};

export default SubHeader;

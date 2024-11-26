import React from "react";
import "./Navbar.css";
import { IoLogoSlack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="both-head">
        <div className="header-container">
          {/* Left Section: Logo */}
          <div className="logo-left">
            <IoLogoSlack />
          </div>

          {/* Center Section: Logo Text */}
          <div className="logo-center">
            <h1>LOGO</h1>
          </div>

          {/* Right Section: Icons */}
          <div className="icons-right">
            <span className="icon">
              <FiSearch />{" "}
            </span>{" "}
            {/* Shopping Cart Icon */}
            <span className="icon">
              <IoMdHeartEmpty />{" "}
            </span>
            <span className="icon">
              <LuShoppingBag />{" "}
            </span>
            <span className="icon">
              <CiUser />{" "}
            </span>
          </div>
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/">Shop</a>
            </li>
            <li className="navbar-item">
              <a href="/products">Skills</a>
            </li>
            <li className="navbar-item">
              <a href="/about">Stories</a>
            </li>
            <li className="navbar-item">
              <a href="/contact">About</a>
            </li>
            <li className="navbar-item">
              <a href="/contact">Contact-Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

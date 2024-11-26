import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-left">
          <h3>Be the first to know</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="form-tag">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </div>
        </div>

        <div className="footer-top-right">
          <h3>Contact Us</h3>
          <p>Address: 1234 Main Street, City, Country</p>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-store">
          <h2>Store</h2>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
      <p className="last">All copy rights are reserved</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import Navbar from "../../components/header/Navbar";
import "./home.css";
import SubHeader from "../../components/subheader/SubHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductPage from "../../components/product/ProductPage";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="sub-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Here s a 50-word heading for an e-commerce website: "Explore the Best
          Online Shopping Experience with a Wide "
        </p>
        <p>
          Fast Delivery, and Secure Transactions. Shop Now and Elevate Your
          Lifestyle with Our Exclusive Deals and Offers!"
        </p>
      </div>
      <div>
        <SubHeader />
      </div>
      <div className="side-product">
        <div className="hide">
          {" "}
          <Sidebar />
        </div>

        <ProductPage />
      </div>
      <Footer />
    </>
  );
};

export default Home;

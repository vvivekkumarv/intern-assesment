import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            
            <h1>The Future of Health Care is Home Care</h1>
            <h3>Over a Decade of Trusted care.</h3>
            
            
            <div className="bannerr__btn">
              <a href="" className="btnn btnn-smart">
                REQUEST AN APPOINTMENT
              </a>
            </div>
          <div className="universe">  
          <p> UNIVERSECARE AREA OF COVEREAGE</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.jpg" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Home Care Heroes</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        
        </ul>
        <div>
          <img src="/img/phn.jpg" alt="phone"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

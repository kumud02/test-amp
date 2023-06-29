import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <a href="https://testamplify.net/" rel="home">
            <img src="https://testamplify.net/wp-content/uploads/2023/02/TA_Logo_brand.png" alt="TestAmplify Academy" />
          </a>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>








</>
  );
};

export default Navbar;

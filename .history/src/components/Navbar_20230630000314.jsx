import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/testamplify-logo-white.png";



const Navbar = () => {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <a href="https://testamplify.net/" rel="home">
              <img src={logo} alt="TestAmplify Academy" className="logo-img" />
            </a>
          </NavLink>
        <button className="navbar-toggler custom-toggler" style={color:"red:} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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

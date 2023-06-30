import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/testamplify-logo-white.png";
import logo2 from "../img/testamplify-logo.png"
import { useState } from "react";



const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-light  bg-transparent ">
      <div className="container-fluid ">
          <NavLink className="brand" to="/">
            <a href="https://testamplify.net/" rel="home">
              <img src={logo} alt="TestAmplify" className="logo-img" />
            </a>
          </NavLink>
        <button 
          className="navbar-toggler ml-auto bg-light custom-toggler" 
          type="button" 
          // data-bs-toggle="collapse" 
          // data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          onClick={openModal} 

        >
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

     {/* Bootstrap Modal */}
     <div
        className={`modal fade ${modalOpen ? "show" : ""}`}
        style={{ display: modalOpen ? "block" : "none" }}
        tabIndex="-1"
        aria-hidden={!modalOpen}
        onClick={closeModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <NavLink className="navbar-brand" to="https://testamplify.net/">
              <img src="https://testamplify.net/wp-content/uploads/2023/02/TA_Logo_brand.png" alt="TestAmplify" className="img-fluid logo-img" />
          </NavLink>
              <button 
                type="button" 
                className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body modal-nav">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            
            <li className="nav-item modal-nav">
              <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item modal-nav ">
              <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
            </li>
            <li className="nav-item modal-nav">
              <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item modal-nav">
              <NavLink activeClassName="menu_active" className="nav-link" to="/faq">FAQ</NavLink>
            </li>

            <li>
            <div className="my-3 d-flex justify-content-center">
                    <NavLink to="/how-it-works" className="btn-how-it-works">
                      How it Works
                    </NavLink>
                    </div>
            </li>
          </ul>
            
              
           
             
            
              
            </div>
          </div>
        </div>
      </div>








</>
  );
};

export default Navbar;

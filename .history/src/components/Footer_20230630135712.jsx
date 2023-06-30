import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/testamplify-logo-white.png";


export const Footer = () => {
  return (
    <>
    <div className="container-fluid brand">
      <div className="row">

    
      <section id="footer  ">
        <div className="container d-flex justify-content-center">
              <img
                src={logo}
                alt="Test Amplify Logo"
                className="img"
                // width="30%"
              />
		  </div>
		  <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-facebook custom-icon"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-twitter custom-icon"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-instagram custom-icon"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i className="fa fa-google-plus custom-icon"></i>
                  </a>
                </li>
              </ul>

              <p className="text-center">
                <NavLink to="/">Privacy Policy</NavLink> |{" "}
                <NavLink to="/">Terms of Use</NavLink>
              </p>
              <p className="h6 text-center">
                All rights reserved ©{" "}
                <NavLink to="https://testamplify.net/" target="_blank">
                  Test Amplify
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
    </>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section id="footer">
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
                    <i className="fa fa-twitter custom-icon "></i>
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
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 order-md-2 text-md-right">
                  <img
                    src="https://testamplify.net/wp-content/uploads/2023/02/TA_Logo_brand.png"
                    alt="Test Amplify Logo"
                  />
                </div>
                <div className="col-md-6 order-md-1 text-md-left">
                  <p>
                    <NavLink to="/">Privacy Policy</NavLink> |{" "}
                    <NavLink to="/">Terms of Use</NavLink>
                  </p>
                  <p className="h6">
                    All rights reserved ©{" "}
                    <NavLink to="https://testamplify.net/" target="_blank">
                      Test Amplify
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

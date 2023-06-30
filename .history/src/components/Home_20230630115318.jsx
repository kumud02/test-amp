import React from "react";
import web from "../img/rocket-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <div className="main-section bg-transparent">
      {<Navbar />}

      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="text-start ">
                    <h2 className="home-text">
                      Make <strong>Test Automation </strong>
                      <br/>
                      Work For You
                    </h2>
                    {/* <h2 className="my-3">
                      <br />
                      Unlock Efficiency and Boost Productivity with Our Automation Solutions!
                    </h2> */}
                    <p></p>

                    <div className="my-3">
                      <NavLink to="/contact" className="btn-get-consultation home-text">
                        Request Consultation
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center align-items-center">
                  <img src={web} className="img-fluid animated" alt="homeimg" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>


      <div className="container-fluid brand">
        <div className="row"></div>

      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-6 text-justify order-2 order-md-1">
            <h2>Your Dev Team's Secret Weapon</h2>
            <p className="text-justify">
              Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing
              team that can unlock that potential. We help your devs build better software, faster and cheaper. Stop
              wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs
              get back to what they do best.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center order-1 order-md-2">
          <i class="fa-sharp fa-light fa-box-open-full custom-icon fa-5x"></i>
          

          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
          <i class="fa-sharp fa-light fa-handshake-angle custom-icon fa-5x"></i>
          </div>
          <div className="col-md-6 text-justify">
            <h2>Your Automation Partner</h2>
            <p className="text-justify">
            Test Amplify is born and bred from a custom software company. We hire only US-based, full-time testers to work for you: this isn't a crowdsourced or mechanical turk-based solution. Instead, it's relationship-based QA, with context. Our team learns your product, your processes, and most importantly, your team. You get a trusted partner you can use as needed to ensure your product quality is maintained while freeing up your team to focus on other priorities.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="row mt-4">
          <div className="col-md-6 text-justify order-2 order-md-1">
            <h2>How it Works?</h2>
            <p className="text-justify">
            We charge a monthly subscription that ensures we have “project-ready” testers: resources that have been trained on your project and familiarized with your testing needs, there when you need them. We bill per tester, per day they spend testing your project. Your subscription includes your first few resource days per month, as well as our training and onboarding process for maintaining your project-ready team.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center order-1 order-md-2">
          <i class="fa-sharp fa-light fa-briefcase custom-icon fa-5x"></i>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
          <i class="fa-sharp fa-light fa-eye custom-icon fa-5x"></i>
          </div>
          <div className="col-md-6 text-justify">
            <h2>Where Do We Fit?</h2>
            <p className="text-justify">
            Test Amplify is a perfect fit for companies with their own dev team, at nearly any phase of the software development process. We can help test your team’s work as they develop new features, against a user story or given acceptance criteria. We can help smoke test a major release before it’s pushed to production. We help build and curate test cases for your team. We work alongside your team so they can get back to delivering your product, with confidence.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="container-fluid brand">
        <div className="row">
      <div className="container">
        <h2 className="text-center">You are Ready For TestAmplify</h2>
        <br/>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h3>You have a Problem</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-check"></i> Don't know what to Automate
              </li>
              <li>
                <i className="fa fa-check"></i> Don't know why to Automate
              </li>
              <li>
                <i className="fa fa-check"></i> Don't know how to automate
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>You are Searching for Solution</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-check"></i> Don't know what to Automate
              </li>
              <li>
                <i className="fa fa-check"></i> Item 2
              </li>
              <li>
                <i className="fa fa-check"></i> Item 3
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>You Searched Us</h3>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-check"></i> Item 1
              </li>
              <li>
                <i className="fa fa-check"></i> Item 2
              </li>
              <li>
                <i className="fa fa-check"></i> Item 3
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid brand ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gx-4">
              <div className="banner">
                <div className="banner-content">
                  <h1 className="text-center">Ready to unlock your team's full potential?</h1>
                  <p className="text-center">Discover the best products and services.</p>
                  <div className="my-3 d-flex justify-content-center">
                    <NavLink to="/contact" className="btn-get-started">
                      Reach Out to Us
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Home;

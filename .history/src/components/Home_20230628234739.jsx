import React from "react";
import web from "../img/rocket-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>

    /*

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">My App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h1>Welcome to My App</h1>
    <p>Content goes here...</p>
  </div>

  <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">My Modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>This is a modal dialog.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>



    */

      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div>
                    <h1>
                      Grow your business with{" "} <br/>
                      <strong className="brand-name">Test Amplify</strong>
                    </h1>
                    <h2 className="my-3">
                      <br />
                      Unlock Efficiency and Boost Productivity with Our Automation Solutions!
                    </h2>
                    <p>Let devs be devs. Leave the testing to us. No need to build and maintain complex test cases yourself. No need to train your team on a new piece of software. And no need to pull precious dev cycles to test your latest build.</p>

                    {/* <div className="my-3">
                      <NavLink to="/contact" className="btn-get-started">
                        Contact Us
                      </NavLink>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center align-items-center">
                  <img src={web} className="img-fluid animated" alt="homeimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 

      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-6 text-justify order-2 order-md-1">
            <h5>Your Dev Team's Secret Weapon</h5>
            <p className="text-justify">
              Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing
              team that can unlock that potential. We help your devs build better software, faster and cheaper. Stop
              wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs
              get back to what they do best.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center order-1 order-md-2">
            <i className="fa fa-google-plus custom-icon fa-5x"></i>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <i className="fa fa-google-plus custom-icon fa-5x"></i>
          </div>
          <div className="col-md-6 text-justify">
            <h5>Your Dev Team's Secret Weapon</h5>
            <p className="text-justify">
              Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing
              team that can unlock that potential. We help your devs build better software, faster and cheaper. Stop
              wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs
              get back to what they do best.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-6 text-justify order-2 order-md-1">
            <h5>Your Dev Team's Secret Weapon</h5>
            <p className="text-justify">
              Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing
              team that can unlock that potential. We help your devs build better software, faster and cheaper. Stop
              wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs
              get back to what they do best.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center order-1 order-md-2">
            <i className="fa fa-google-plus custom-icon fa-5x"></i>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <i className="fa fa-google-plus custom-icon fa-5x"></i>
          </div>
          <div className="col-md-6 text-justify">
            <h5>Your Dev Team's Secret Weapon</h5>
            <p className="text-justify">
              Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing
              team that can unlock that potential. We help your devs build better software, faster and cheaper. Stop
              wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs
              get back to what they do best.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="text-center">You are Ready For TestAmplify</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Block 1</h3>
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
          <div className="col-md-4">
            <h3>Block 2</h3>
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
          <div className="col-md-4">
            <h3>Block 3</h3>
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

      <div className="container-fluid mt-5">
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
    </>
  );
};

export default Home;

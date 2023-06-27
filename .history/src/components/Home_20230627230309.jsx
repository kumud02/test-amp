import React from "react";
import web from "../img/rocket-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import { Service } from "../components/Service";
import { Client } from "../components/Client";

const Home = () => {
    return (
        <>
        <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1>
                    Grow your business with{" "}
                    <strong className="brand-name">Test Amplify</strong>
                  </h1>
                  <NavLink to="/how-it-works" className="btn-get-started">Get Started </NavLink>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img src="path/to/image.jpg" alt="Example Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>

{/* No touch */}


           <div className="container">
      <div className="row">
        <div>
          <section id="header" className="d-flex align-item-center">
            <div className=" container-fluid-mb-5">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your business with{" "}
                    <strong className="brand-name">Test Amplify</strong>
                  </h1>
                  <h2 className="my-3">
                    <br />
                    Unlock Efficiency and Boost Productivity with Our Automation Solutions!
                  </h2>
                  <p></p>

                  <div className="my-3">
                    <NavLink to="/how-it-works" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center align-items-center">
                  <img src={web} className=" img-fluid animated" alt="homeimg" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>



  

    
            {/* <div className="container">
                <div className="row">
                    <Service />
                </div>
            </div> */}

            <div>
                <br />
                <br />

                {/* <div className="ClientInfo">{<Client />}</div> */}

      
            </div>


            <div class="container">
  <div class="row mt-4">
    <div class="col-md-6 text-justify">
      <h5>Your Dev Team's Secret Weapon</h5>
      <p className="text-justify">Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing team that can unlock that potential. We help your devs build better software, faster and cheaper.
Stop wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs get back to what they do best.

</p>
    </div>
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <i class="fa fa-google-plus custom-icon fa-5x"></i>
    </div>
  </div>
</div>

<div class="container">
  <div class="row mt-4">
  
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <i class="fa fa-google-plus custom-icon fa-5x"></i>
    </div>
    <div class="col-md-6 text-justify">
      <h5>Your Dev Team's Secret Weapon</h5>
      <p className="text-justify">Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing team that can unlock that potential. We help your devs build better software, faster and cheaper.
Stop wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs get back to what they do best.

</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="row mt-4">
    <div class="col-md-6 text-justify">
      <h5>Your Dev Team's Secret Weapon</h5>
      <p className="text-justify">Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing team that can unlock that potential. We help your devs build better software, faster and cheaper.
Stop wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs get back to what they do best.

</p>
    </div>
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <i class="fa fa-google-plus custom-icon fa-5x"></i>
    </div>
  </div>
</div>

<div class="container">
  <div class="row mt-4">
   
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <i class="fa fa-google-plus custom-icon fa-5x"></i>
    </div>

    <div class="col-md-6 text-justify">
      <h5>Your Dev Team's Secret Weapon</h5>
      <p className="text-justify">Your dev team is capable of more. Much more. CarbonQA rapidly provides a dedicated, US-based testing team that can unlock that potential. We help your devs build better software, faster and cheaper.
Stop wasting your dev team's time on testing. A CarbonQA team immediately drives value by letting your devs get back to what they do best.

</p>
    </div>
  </div>
</div>


<div class="container mt-4">
  <h2 class="text-center">You are Ready For TestAmplify</h2>
  <div class="row">
    <div class="col-md-4">
      <h3>Block 1</h3>
      <ul class="list-unstyled">
        <li><i class="fa fa-check"></i> Item 1</li>
        <li><i class="fa fa-check"></i> Item 2</li>
        <li><i class="fa fa-check"></i> Item 3</li>
      </ul>
    </div>
    <div class="col-md-4">
      <h3>Block 2</h3>
      <ul class="list-unstyled">
        <li><i class="fa fa-check"></i> Item 1</li>
        <li><i class="fa fa-check"></i> Item 2</li>
        <li><i class="fa fa-check"></i> Item 3</li>
      </ul>
    </div>
    <div class="col-md-4">
      <h3>Block 3</h3>
      <ul class="list-unstyled">
        <li><i class="fa fa-check"></i> Item 1</li>
        <li><i class="fa fa-check"></i> Item 2</li>
        <li><i class="fa fa-check"></i> Item 3</li>
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

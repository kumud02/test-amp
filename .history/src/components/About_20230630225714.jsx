import React, { useEffect } from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";
import HowItWorks from "./HowItWorks";

const About = () => {
  useEffect(() => {
    document.title = 'About | Test Amplify'; // Set the desired page title
  }, []);
    return(

        <>
        <div className="container-fluid brand">
        <div className="row"></div>
       <section id = "header" className="d-flex align-item-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                            <h1>                    
                                <strong className="brand-name"> Test Amplify </strong>-
                                Your Complete Solution To<strong className="brand-name">  Automation  </strong>
                                </h1>
                            <h2 className="my-3"> <br/>
                            We specialize in QA Automation services, leveraging cutting-edge techniques to enhance software testing and deliver top-notch quality solutions.
                            </h2>
                            <p>
                            </p>

                            <div className="my-3">
                                <NavLink to="/contact" className="btn-get-started" >Contact Us</NavLink>
                            </div>

                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="homeimg" />

                        </div>
                        </div>

                </div>
            </div>
        </div>
       </section>


<br />
<br />

<br />


<div className="mt-4 container">

<div className="header">
    <h1>About Us</h1>

    <p>We’re all about making learning fun and accessible. We use cutting-edge technology to create interactive and personalized learning experiences so that you can learn at your own pace and in your own style.</p>
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>OUR VISION</h2>
      <p>Revolutionize automation testing education worldwide, empowering the next-gen engineers with essential skills for a dynamic industry.</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box red">
      <p>"Automation testing is a critical aspect of modern software development"</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="box box-down blue">
      <h2>Our Mission</h2>
      <p>Empowering automation testing through quality education for career growth.</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <p>"Automation testing is an essential component of modern software development"</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
  
</div>





<div className="mt-4">
    {<HowItWorks />}
</div>

</div>


       </>
    )
}


export default About
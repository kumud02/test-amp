import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

const About = () => {
    return(

        <>
        <div className="my-5">
            <h1 className="text-center">About Us</h1>

        </div>
       <section id = "header" className="d-flex align-item-center">

            <div className="container-fluid nav_bg">
            <p className="text-center">We’re all about making learning fun and accessible. We use cutting-edge technology to create interactive and personalized learning experiences so that you can learn at your own pace and in your own style.</p>

                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                            <h1> Grow your business with 
                                
                                
                                <strong className="brand-name"> Test Amplify</strong></h1>
                            <h2 className="my-3"> <br/>
                            Unlock Efficiency and Boost Productivity with Our Automation Solutions!
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

       </>
    )
}


export default About
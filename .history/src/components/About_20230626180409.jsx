import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

const About = () => {
    return(

        <>
        
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


       <div className="container">
            <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p class="card-text">"Automation testing is a critical aspect of modern software development"</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">OUR VISION</h5>
        <p class="card-text">Our vision is to revolutionize the way automation testing is learned and practiced, by providing accessible and comprehensive education to individuals and organizations around the world. To empower the next generation of test automation engineers with the knowledge and skills they need to succeed in a rapidly changing industry.</p>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</div>
</div>


<section class="py-5">
    <div class="container">
        {/* <!-- FOR DEMO PURPOSE --> */}
        <div class="row">
            <div class="col-lg-6 mx-auto">
                <header class="text-center pb-5">
                    <h1 class="h2">Our Clients</h1>
                </header>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-4 mx-auto">

                {/* <!-- CUSTOM BLOCKQUOTE --> */}
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>

            <div class="col-lg-4 mx-auto">

{/* <!-- CUSTOM BLOCKQUOTE --> */}
<blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
    <div className="blockquote-custom-icon bg-info shadow-sm">
<i className="fa fa-quote-left text-white"></i></div>
    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
        <cite title="Source Title">Source Title</cite>
    </footer>
</blockquote>

</div>
 <div class="col-lg-4 mx-auto">

                {/* <!-- CUSTOM BLOCKQUOTE --> */}
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" class="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>
        </div>
    </div>
</section>

       </>
    )
}


export default About
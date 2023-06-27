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


<br />
<br />

<br />



       <div className="container">
            <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">"Automation testing is a critical aspect of modern software development"</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">OUR VISION</h5>
        <p className="card-text">Our vision is to revolutionize the way automation testing is learned and practiced, by providing accessible and comprehensive education to individuals and organizations around the world. To empower the next generation of test automation engineers with the knowledge and skills they need to succeed in a rapidly changing industry.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Our Mission</h5>
        <p className="card-text">Our mission is to provide comprehensive, accessible, and up-to-date automation testing education to individuals and organizations, enabling them to achieve their full potential in this rapidly evolving field.
We are committed to delivering high-quality, engaging, and practical learning experiences that help test automation engineers improve their skills and advance their careers.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">"Automation testing is an essential component of modern software development"</p>
      </div>
    </div>
  </div>
</div>
</div>


<section className="py-5">
    <div className="container">
        {/* <!-- FOR DEMO PURPOSE --> */}
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <header className="text-center pb-5">
                    <h1 className="h2">Our Clients</h1>
                </header>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-4 mx-auto">

                {/* <!-- CUSTOM BLOCKQUOTE --> */}
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>

            <div className="col-lg-4 mx-auto">

{/* <!-- CUSTOM BLOCKQUOTE --> */}
<blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
    <div className="blockquote-custom-icon bg-info shadow-sm">
<i className="fa fa-quote-left text-white"></i></div>
    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
        <cite title="Source Title">Source Title</cite>
    </footer>
</blockquote>

</div>
 <div className="col-lg-4 mx-auto">

                {/* <!-- CUSTOM BLOCKQUOTE --> */}
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>
        </div>
    </div>
</section>

<div>

<div class="header">
    <h1>Reliable, efficient delivery</h1>
    <h1>Powered by Technology</h1>

    <p>Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your project is successful</p>
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>OUR VISION</h2>
      <p></p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box red">
      <p>"Automation testing is a critical aspect of modern software development"</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="box box-down blue">
      <h2>Our Mission</h2>
      <p>Our mission is to provide comprehensive, accessible, and up-to-date automation testing education to individuals and organizations, enabling them to achieve their full potential in this rapidly evolving field. We are committed to delivering high-quality, engaging, and practical learning experiences that help test automation engineers improve their skills and advance their careers.</p>
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


<div>

<h1> Get Started </h1>
<ol>
    <li >
        <div class="icon"><i class="fa-solid fa-bicycle"></i></div>
        <div class="title">Step 1</div>
        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
    </li>
    <li >
        <div class="icon"><i class="fa-solid fa-car"></i></div>
        <div class="title">Step 2</div>
        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
    </li>
    <li >
        <div class="icon"><i class="fa-solid fa-helicopter"></i></div>
        <div class="title">Step 3</div>
        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
    </li>
    <li >
        <div class="icon"><i class="fa-solid fa-plane"></i></div>
        <div class="title">Step 4</div>
        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
    </li>
    <li >
        <div class="icon"><i class="fa-solid fa-rocket"></i></div>
        <div class="title">Step 5</div>
        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
    </li>
    <li >
        <div class="icon"><i class="fa-solid fa-bus"></i></div>
        <div class="title">Step 6</div>
        <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
    </li>
</ol>
<div class="credits">
    <a target="_blank" href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm">inspired by</a>
</div>
</div>

       </>
    )
}


export default About
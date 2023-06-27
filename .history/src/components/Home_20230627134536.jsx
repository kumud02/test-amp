import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";
import {Service} from "../components/Service"
import {Client} from '../components/Client'


const Home = () => {

    
    return(
        <>

        <div className="container">
            
        </div>
        <div>
       <section id = "header" className="d-flex align-item-center">
            <div className="container-fluid nav_bg">
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
                                <NavLink to="/service" className="btn-get-started" >Get Started </NavLink>
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
       </div>
       <div className=" container mt-4">
        <div className="row mt-4">
        {
            <Service/>
        }
        </div>
       </div>

       <div>
        <br/>
        <br/>

        <div class="ClientInfo">
            {<Client />}

        </div>

        
       <div className="container-fluid-mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gx-4">
            <div className="banner">
            <div className="banner-content">
                <h1 className="text-center">Ready to unlock your team's full potential?</h1>
                <p className="text-center">Discover the best products and services.</p>
                <div className="my-3 d-flex justify-content-center">
                                <NavLink onclick="window.scrollTo(0, 0)" to="/contact" className="btn-get-started" >Reach Out to Us </NavLink>
                            </div>          
                </div>
    </div>
    </div>
    </div>
    </div>
    </div>

       </div>

       </>
       
    )
}




export default Home
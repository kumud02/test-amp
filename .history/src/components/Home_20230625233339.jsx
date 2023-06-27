import React from "react";
import "../"

const Home = () => {
    return(
       <section id = "header" className="">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" >
                            <h1> Grow your business with 
                                
                                <strong className="brand-name">Test Amplify</strong></h1>
                            <h2 className="my-3">
                                We are qualified QA Engineer 
                            </h2>

                            <div className="my-3">
                                <a href="" className="btn-get-started" >Get Started </a>
                            </div>

                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src="" className="img-fluid animated" alt="homeimg" />

                        </div>

                </div>
            </div>
        </div>
       </section>
    )
}


export default Home
import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

export const HowItWorks = () => {
    return(

    <>
    <div className="container-fluid brand">
        <div className="row">

<div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gx-4">
                                <div className="banner">
                                    <div className="banner-content">
                                        <h1 className="text-center">How Test Amplify works for your team?</h1>
                                        <p className="text-center">We've developed a process that onboards our team quickly so we can start testing your app and reporting issues in as little as two weeks.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <div class="timeline-content">
                    <div class="mt-2 timeline-year"><span>1</span></div>
                        <h3 class="title">Sign on with us</h3>
                        <p class="description">
                        Sign our super-simple contract. You get a US-based, dedicated QA team ready to test. It’s month-to-month, so you can cancel anytime if your needs change.
                        </p>
                    </div>
                </div>
                <div class="mt-2 timeline">
                    <div class="timeline-content">
                    <div class="timeline-year"><span>2</span></div>
                        <h3 class="title">Tell us about your work</h3>
                        <p class="description">
                        Complete a short survey that tells us a bit more about your stack, environments, app, and any current testing you’re doing.                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <div class="timeline-content">
                        <div class="timeline-year">3</div>
                        <h3 class="title">Kickoff</h3>
                        <p class="description">
                        This is our onboarding meeting: a walkthrough of your current app, your most critical needs, and how you want us filing issues.                        </p>
                        </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <div class="timeline-year">4</div>
                        <h3 class="title">It's testing time!</h3>
                        <p class="description">
                        Our dedicated team starts testing your app and filing issues in the bug tracker of your choice. Your team can ask them questions directly through Slack or through the tracker.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gx-4">
                                <div className="banner">
                                    <div className="banner-content">
                                        <h1 className="text-center">Let Us Create Solution For You</h1>
                                        {/* <p className="text-center">Discover the best products and services.</p> */}
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
    )}

export default HowItWorks
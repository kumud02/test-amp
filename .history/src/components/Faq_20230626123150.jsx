import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";



const Faq = ({ faq_data }) => {
  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

   
    return(
    <> 
      <div className="faq_area section_padding_130" id="faq">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6">
        {/* Section Heading */}
        <div
          className="section_heading text-center wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <h3><span>Frequently </span> Asked Questions</h3>
          <p>Learn more about Test Amplify.</p>
          <div className="line"></div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* FAQ Area */}
      <div className="col-12 col-sm-10 col-lg-8">
        <div className="accordion faq-accordian" id="faqAccordion">
          <div
            className="card border-0 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <div className="card-header" id="headingOne">
              <h6
            className="mb-0 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collaseOne"
          >
            How does Test Amplify work?            

                <span className="lni-chevron-up"></span>
              </h6>
            </div>
            
            <div
              className="collapse"
              id="collapseOne"
              aria-labelledby="headingOne"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                <p>We assign a team to learn the ins and outs of your project, and start manually testing your app. We report bugs to your team directly and we remain available as you continue development on your project. We've formed long-term testing partnerships with clients for years. We provide ongoing support, burst capacity, and everything in between.</p>
              </div>
            </div>
          </div>
          {/* copied */}
          <div
            className={"card border-0 wow fadeInUp activeAccordion === 2 ? 'active'"}
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <div className="card-header" id="headingTwo">
              <h6
            className="mb-0 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collaseTwo"
          >
            Why not use a crowdsourced QA solution?        

                <span className="lni-chevron-up"></span>
              </h6>
            </div>
            
            <div
              className="collapse"
              id="collapseTwo"
              aria-labelledby="headingTwo"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                <p>Crowdsourcing QA can have its place. But we've found that context is everything in testing. When we get to know your product, it makes us more effective. Our testing relationship is a partnership, and not some random fling. (And what's more, our testers go way beyond what crowdsourced testers are able to do.) We talk with your devs directly in Slack, follow up on issues, work within your release timelines, and anticipate your needs. It's a completely different experience.</p>
              </div>
            </div>
          </div>



{/* Copied */}


          <div
            className="card border-0 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <div className="card-header" id="headingThree">
              <h6
            className="mb-0 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collaseThree"
          >
How do we start?
                <span className="lni-chevron-up"></span>
              </h6>
            </div>
            
            <div
              className="collapse"
              id="collapseThree"
              aria-labelledby="headingThree"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                <p>
It's simple: after we determine together that we're a fit, we begin our monthly engagement. You complete a very short introduction survey and we begin with a kick off meeting for the project with your product owner, our onboarding team, and a few of our testers.
We create a shared Slack channel, and determine where you want your bugs reported, and we get to work familiarizing ourselves with your app.
Our team works alongside yours: we file issues, ask questions in Slack, create animated screen capture gifs to aid in reproducing issues, and coordinate with your team's release schedule.</p>
              </div>
            </div>


          
        </div>

</div>
        {/* Support Button */}
        <div
          className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp"
          }}
        >
          <i className="lni-emoji-sad"></i>
          <p className="mb-0 px-2">Can't find your answers?</p>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      </div>
    </div>
  </div>
</div>




    </>
    )
}


export default Faq
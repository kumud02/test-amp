import React from "react";
import { useEffect } from "react";



const Faq = () => {

    useEffect(() => {
        // Initialize accordion functionality
        const accordions = document.getElementsByClassName('faq-accordion');
        for (let i = 0; i < accordions.length; i++) {
          accordions[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
              panel.style.display = 'none';
            } else {
              panel.style.display = 'block';
            }
          });
        }
      }, []);
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
          <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
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
              <h6>
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I install this app?
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>
          <div
            className="card border-0 wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp"
            }}
          >
            <div className="card-header" id="headingTwo">
              <h6
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                The apps isn't installing?
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
              </div>
            </div>
          </div>
          <div
            className="card border-0 wow fadeInUp"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp"
            }}
          >
            <div className="card-header" id="headingThree">
              <h6
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Contact form isn't working?
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem facere deserunt sint animi sapiente vitae suscipit.</p>
                <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
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
          <a href="#">Contact us</a>
        </div>
      </div>
    </div>
  </div>
</div>






    </>
    )
}


export default Faq
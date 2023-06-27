import React from "react";

const Faq = () => {
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
            >
              <h3>
                <span>Frequently</span> Asked Questions
              </h3>
              <p>
                Appland is completely creative, lightweight, clean &amp; super
                responsive app landing page.
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* FAQ Area */}
          <div className="col-12 col-sm-10 col-lg-8">
            <div
              className="accordion faq-accordian"
              id="faqAccordion"
              data-wow-delay="0.2s"
            >
              <div className="card border-0 wow fadeInUp">
                <div className="card-header" id="headingOne">
                  <h6
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto quidem facere deserunt sint animi sapiente vitae
                      suscipit.
                    </p>
                    <p>
                      Appland is completely creative, lightweight, clean &amp;
                      super responsive app landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card border-0 wow fadeInUp" data-wow-delay="0.3s">
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto quidem facere deserunt sint animi sapiente vitae
                      suscipit.
                    </p>
                    <p>
                      Appland is completely creative, lightweight, clean &amp;
                      super responsive app landing page.
                    </p>
                  </div>
                </div>
              </div>
              </div>
              </div>

    </>
    )
}


export default Faq
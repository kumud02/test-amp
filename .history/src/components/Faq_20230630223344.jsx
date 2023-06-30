import React from "react";
import { NavLink } from "react-router-dom";
import FAQData from "./FAQData";

const Faq = () => {
  return (
    <>
      <div className="container-fluid brand">
        <div className="row">
          <div className="my-5">
            <h1 className="text-center">Frequently Asked Questions (FAQ)</h1>
            <p className="text-center">Learn more about Test Amplify.</p>
          </div>
          
          {/* Render the FAQ items */}
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
                    <div className="line"></div>
                  </div>
                </div>
              </div>
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
                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* FAQ Area */}
                <div className="col-12 col-sm-10 col-lg-8">
                  <div className="accordion faq-accordian" id="faqAccordion">
                    {/* Map through the FAQData and render each item */}
                    {FAQData.map((faqItem, index) => (
                      <div
                        className="card border-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.2s",
                          animationName: "fadeInUp"
                        }}
                        key={index}
                      >
                        <div className="card-header" id={`heading-${index}`}>
                          <h6
                            className="mb-0 collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse-${index}`}
                          >
                            {faqItem.question}
                            <span className="lni-chevron-up"></span>
                          </h6>
                        </div>
                        <div
                          className="collapse"
                          id={`collapse-${index}`}
                          aria-labelledby={`heading-${index}`}
                          data-parent="#faqAccordion"
                        >
                          <div className="card-body">
                            <p className="card-body-text">{faqItem.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp"
                }}
              >
                
                <p className="fs-3 py-4">Can't find your answers? <NavLink className="btn-contact" to="/contact">Contact us</NavLink></p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

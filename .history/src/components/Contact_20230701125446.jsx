import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Test Amplify"; // Set the desired page title
  }, []);

  const [isEmailSent, setIsEmailSent] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_g7g5ycd", "template_ym1ymm9", {
        name,
        email,
        message,
      }, "SQKpoZo086l87phUn")
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setCompany("");
        setPhoneNumber("");
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <div className="container-fluid brand">
        <div className="row">
          <div className="brand">
            {isEmailSent && (
              <div className="container alert alert-success alert-dismissible fade show text-center success-message">Email sent successfully!</div>
              <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">
              <i class="bi-check-circle-fill"></i>
              <strong class="mx-2">Success!</strong> Your message has been sent successfully.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>  
            </div></
            
            )}
          </div>
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">Contact Us for more details</p>
        </div>

        <div className="container-fluid contact-div brand">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="contactNumber"
                    name="contactNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your contact number"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    placeholder="Please tell us how can we help you..."
                  />
                </div>

                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-3 col-10 mx-auto">
              <strong>Call us</strong>
              <p>+1-492-4918-395</p>
              <p>+14-394-409-591</p>
              <br />

              <strong>Email Us</strong>
              <p>info@testamplify.com</p>

              <br />
              <strong>Visit Us</strong>
              <p>34 Madison Street</p>
              <p>NY, USA 10005</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

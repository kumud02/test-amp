import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Loader from "./Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    document.title = "Contact | Test Amplify";

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phoneNumber: "",
    };

    if (name.trim() === "") {
      newErrors.name = "Please enter your name";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Please enter your phone number";
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send("service_g7g5ycd", "template_ym1ymm9", {
        name,
        email,
        message,
        phoneNumber,
        company,
      }, "SQKpoZo086l87phUn")
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        setName("");
        setEmail("");
        setMessage("");
        setCompany("");
        setPhoneNumber("");
        setIsEmailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loader />}

      <div className="container-fluid brand">
        <div className="row">
          <div className="brand success-message">
            {isEmailSent && (
              <div className="container alert alert-success alert-dismissible d-flex align-items-center fade show">
                <p className="text-center success-message">
                  Your message has been sent successfully. We will contact you shortly.
                </p>
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
              </div>
            )}
          </div>
          <h1 className="text-center font-weight-bold">Contact Us</h1>
          <p className="text-center">Contact us for more details</p>
        </div>

        <div className="container-fluid contact-div brand">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    required
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="fullName"
                    name="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
                    type="text"
                    className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                    id="contactNumber"
                    name="contactNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your contact number"
                  />
                  {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    required
                    className="form-control"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    placeholder="Please tell us how can we help you..."
                  />
                </div>

                <div className="my-3 d-flex justify-content-center">
                  <button type="submit" className="btn-send-email">
                    Send Email
                  </button>
                </div>
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

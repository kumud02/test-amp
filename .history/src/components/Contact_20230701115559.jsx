import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    useEffect(() => {
        document.title = 'Contact | Test Amplify'; // Set the desired page title
      }, []);


    // Here 
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [company, setCompany] = useState('');
        const [phoneNumber, setPhoneNumber ] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          
        emailjs.send("service_g7g5ycd","template_ym1ymm9",{
            name,
            email,
            message,
          }, 'SQKpoZo086l87phUn')
            .then((response) => {
              console.log('Email sent successfully!', response.text);
              // Reset form fields
              setName('');
              setEmail('');
              setMessage('');
              setCompany('');
              setPhoneNumber('');
            })
            .catch((error) => {
              console.error('Error sending email:', error);
            });
        };


    // Here




    
    return(
       <>
       <div className="container-fluid brand">
        <div className="row">

       
        <div className="brand" >
            <h1 className="text-center">Contact Us</h1> 
            <p className="text-center">Contact Us for more details</p>
        </div>

            <div className="container-fluid contact-div brand" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    name="fullname"
                                    value={name}
                                    onChange={InputEvent}
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter your name"
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    name="email"
                                    value={email}
                                    onChange={InputEvent}
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter your name"
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    Company
                                </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="company" 
                                    name="company"
                                    value={company}
                                    onChange={InputEvent}
                                    aria-describedby="company" 
                                    placeholder="Enter your Company Name"
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    Contact Number
                                </label>
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    id="contact_number" 
                                    name="phone"
                                    value={phoneNumber}
                                    onChange={InputEvent}
                                    aria-describedby="contactHelp" 
                                    placeholder="Enter your contact number"
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    Message
                                </label>
                                <textarea 
                                    type="text" 
                                    class="form-control" 
                                    id="message" 
                                    name="message"
                                    value={message}
                                    onChange={InputEvent}
                                    rows="4"
                                    placeholder="Please tell us how can we help you..."
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <button type="submit"  class="btn btn-outline-primary">Submit</button>

                        </form>


                    </div>
                    
                    <div className="col-md-3 col-10 mx-auto  ">

                        <strong >Call us</strong>
                        <p>+1-492-4918-395</p>
                        <p>+14-394-409-591</p>
                        <br />

                        <strong >Email Us</strong>
                        
                        <p>info@testamplify.com</p>

                        <br />
                        <strong>Visit Us</strong>
                        
                        <p>34 Madison Street</p>
                            <p>NY, USA 10005</p>
</div>
            </div>

        </div> 
    

        </div>
       </div>
</>
    )
}


export default Contact
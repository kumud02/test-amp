import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    })

    const formSubmit = () => {

    }
    return(
       <>
        <div className="my-5" >
            <h1 className="text-center">Contact Us</h1> 
        </div>
            <div className="container contact-div" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    name=""
                                    value=""
                                    onChange{}
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
                                    rows="4"
                                    placeholder="Please tell us how can we help you..."
                                />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>

                        </form>


                    </div>
            </div>

        </div> 
    


</>
    )
}


export default Contact
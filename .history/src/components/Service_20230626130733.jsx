import React from "react";
import web from "../img/rocket-svgrepo-com.svg"

const Service = () => {
    return(
        <>
        <div classNameName="my-5">
            <h1 classNameName="tab-center">Our Services</h1>

        </div>

        <div classNameName="container-fluid-mb-5">
            <div classNameName="row">
                <div classNameName="col-10 mx-auto">
                    <div classNameName="row">
                        <div classNameName="col-md-4 col-10 mx-auto"> 
                        <div className="card" >
                                <img className="card-img-top" src={web} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>



        
        
        </>
    )
}


export default Service
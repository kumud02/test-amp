import React from "react";
import web from "../img/rocket-svgrepo-com.svg"

const Service = () => {
    return(
        <>
        <div className="my-5">
            <h1 className="tab-center">Our Services</h1>

        </div>

        <div className="container-fluid-mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy">
                        <div className="col-md-4 col-10 mx-auto"> 
                        <div class="card" >
                                <img class="card-img-top" src={web} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
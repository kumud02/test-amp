import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

const Card = (p) => {
    return(
        <>
       
                        <div className="col-md-4 col-10 mx-auto"> 
                        <div className="card" >
                                <img className="card-img-top" src={web} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>

               

        </div>



        
        
        </>
    )
}


export default Card
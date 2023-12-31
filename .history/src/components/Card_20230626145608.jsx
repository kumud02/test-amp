import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return(
        <>
       
                        <div className="col-md-4 col-10 mx-auto"> 
                        <div className="card" >
                                <img className="card-img-top" src={props.imgSrc} alt={props.title} />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                    <p className="card-text">{props.description}</p>
                                    <NavLink to="/" className="services btn-read-more btn-">Read More</NavLink>
                                </div>
                                </div>

        </div>
        </>
    )
}


export default Card
import React from "react";
import web from "../img/rocket-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <> 
        
            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto mt-4">
                <div className="card services">
                    <img className="card-img-top" src={props.imgSrc} alt={props.title} />
                    <div className="card-body services">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <NavLink to="/" className="btn-read-more">
                            Read More
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

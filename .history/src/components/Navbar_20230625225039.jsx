import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                     <NavLink className="navbar-brand" to="#">Test Amplify</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0" />
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" href="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" href="#">Services</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" href="#">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" href="#">FAQ</NavLink>
                            </li>
                            
                        
    </div>
  </div>
</nav>

                </div>
            </div>

        </div>




   


    )
            
}


export default Navbar;
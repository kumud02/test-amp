import React from "react";

const Navbar = () => {
    return(

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                     <NavLinkclassName="navbar-brand" href="#">Test Amplify</NavLinkclassName=>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0" />
                            <li className="nav-item">
                            <NavLinkclassName="nav-link active" aria-current="page" href="#">Home</NavLinkclassName=>
                            </li>
                            <li className="nav-item">
                            <NavLinkclassName="nav-link" href="#">About</NavLinkclassName=>
                            </li>
                            <li className="nav-item">
                            <NavLinkclassName="nav-link" href="#">Services</NavLinkclassName=>
                            </li>
                            <li className="nav-item">
                            <NavLinkclassName="nav-link" href="#">Contact</NavLinkclassName=>
                            </li>
                            <li className="nav-item">
                            <NavLinkclassName="nav-link" href="#">FAQ</NavLinkclassName=>
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
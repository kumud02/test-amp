import React from "react";
import web from "../img/rocket-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

const About = () => {
    return(

    <>
    <section className="py-5">
    <div className="container">
        {/* <!-- FOR DEMO PURPOSE --> */}
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <header className="text-center pb-5">
                    <h1 className="h2">Our Clients</h1>
                </header>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-4 mx-auto">

                {/* <!-- CUSTOM BLOCKQUOTE --> */}
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>

            <div className="col-lg-4 mx-auto">

{/* <!-- CUSTOM BLOCKQUOTE --> */}
<blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
    <div className="blockquote-custom-icon bg-info shadow-sm">
<i className="fa fa-quote-left text-white"></i></div>
    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
        <cite title="Source Title">Source Title</cite>
    </footer>
</blockquote>

</div>
 <div className="col-lg-4 mx-auto">

                {/* <!-- CUSTOM BLOCKQUOTE --> */}
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                    <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="#" className="text-info">@consequat</a>."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>

            </div>
        </div>
    </div>
</section>

    </>    
    )
}

export default <Client></Client>

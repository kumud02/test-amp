import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return(
        <>
                	<section id="footer">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
                    <img src="https://testamplify.net/wp-content/uploads/2023/02/TA_Logo_brand.png" />
                    <p>Privacy Policy | Terms of Use </p>
					<p class="h6">All right Reversed ©<NavLink class=" ml-2" to="https://testamplify.net/" target="_blank">Test Amplify</NavLink></p>
				</div>
			</div>	
		</div>
	</section>
        </>
    )
}

export default Footer
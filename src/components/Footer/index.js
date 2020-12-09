import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const Footer = () => {

  return (
    <footer className="page-footer font-small py-4">
    		<div className="container-fluid text-center text-md-left">

    			<div className="row">

    				<div className="col-md-6 mt-md-0 mt-3 pl-5 text-center">

    					<h5 className="text-uppercase text-white">AJA Masonry Corp.</h5>
    					<Image source="/images/AJA_Masonry_Logo.png" alternate="AJA Logo" />

    				</div>

    				<hr className="clearfix w-100 d-md-none pb-3" />

    				<div className="col-md-6 mb-md-0 mb-3 text-center">

    					<div className="text-center mt-2">
    						<Link className="my-4" to="/services"><h5 className="text-uppercase text-white py-2">Services</h5></Link>
    						<Link className="my-4" to="/gallery"><h5 className="text-uppercase text-white py-2">Gallery</h5></Link>
    						<Link className="my-4" to="/request"><h5 className="text-uppercase text-white py-2">Contact Us</h5></Link>
    					</div>

    				</div>

    			</div>
    		</div>
    	</footer>
    );
}

export default Footer;

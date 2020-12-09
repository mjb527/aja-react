import React from 'react';
import { Link } from 'react-router-dom';
// <!-- TODO fix collapse for right side menu -->

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark mb-1">
      <Link to="/" className="navbar-brand text-white">
        <h4>AJA Masonry Corp.</h4>
      </Link>

    	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    		<span className="navbar-toggler-icon"></span>
    	</button>
    	<div className="collapse navbar-collapse" id="menu">
    		<ul className="navbar-nav ml-auto">
    			<li className="nav-item dropdown">
    				<a className="nav-link text-white dropdown-toggle" id="navbarGallery" href="javascript.void(0)" data-toggle="dropdown">Gallery</a>
    				<div className="dropdown-menu text-burgandy" id="gallery-dropdown">
    					<Link className="dropdown-item" to="/gallery/grills">Grills</Link>
    					<Link className="dropdown-item" to="/gallery/fireplaces">Fireplaces</Link>
    					<Link className="dropdown-item" to="/gallery/terrace-and-patios">Terraces and Patios</Link>
    					<Link className="dropdown-item" to="/gallery/brick-elevations">Brick Elevations</Link>
    					<Link className="dropdown-item" to="/gallery/stone-elevations">Stone Elevations</Link>
    					<Link className="dropdown-item" to="/gallery/walls-and-steps">Walls and Steps</Link>
    					<Link className="dropdown-item" to="/gallery/misc">Miscellaneous</Link>
    				</div>
    			</li>

    			<li className="nav-item">
    				<Link className="nav-link text-white" id="navbarServices" to="/services">Services</Link>
    			</li>

    			<li className="nav-item">
    				<Link className="nav-link text-white" to="/contact" id="navbarContact">Contact Us!</Link>
    			</li>

    		</ul>

    	</div>
    </nav>
  );
}

export default Header;

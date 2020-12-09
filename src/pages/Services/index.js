import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';

import '../../style/services.css';

const Services = () => {
  return(
    <div>
    <div className="container my-4">

      <div className="row my-4">
        <div className="row">
          <h2 className="pl-md-5"><u className="pl-3">FIREPLACES</u></h2>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-12 pl-md-5">
            <Image source="/images/fireplaces/Black Point Rumson (4).jpg" alt="Fireplace Example" classes="rounded" />
          </div>
          <div className="col-md-6 col-sm-12 pb-sm-4 px-sm-5 pl-md-2">
            <h4>A very popular way of finishing a fireplace is the use of brick or stone. It makes the fireplace structurally sound and looks elegant. You can choose from virtually any stone or brick any combination and design.</h4>
            <Link to="/gallery/fireplaces"> <button type="button" className="btn btn-lg btn-outline-danger">View in Gallery</button> </Link>
          </div>
        </div>

      </div>

      <div className="row my-4">

        <div className="row pl-md-5">
          <h2><u className="pl-3">GRILLS</u></h2>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-12 pl-md-5">
            <Image source="/images/grills/2012-09-25_15-27-20_76.jpg" alt="Grill Example" classes="rounded" />
          </div>
          <div className="col-md-6 col-sm-12 pl-md-4 pl-sm-0">
            <h4 className="">An outdoor grill or fireplace will turn your terrace into a great place for passing time and relaxing. It will be a great place to get together with your friends and family.</h4>
            <Link to="/gallery/grills"> <button type="button" className="btn btn-lg btn-outline-danger">View in Gallery</button> </Link>
          </div>
        </div>

      </div>

      <div className="row my-4">

        <div className="row pl-md-5">
          <h2><u className="pl-3">RETAINING WALLS & STEPS</u></h2>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-12 pl-md-5">
            <Image source="/images/walls-and-steps/Bridal_Path_mahwah_(21).jpg" alt="Retaining Wall Example" classes="rounded" />
          </div>
          <div className="col-md-5 col-sm-12 pl-md-4 pl-sm-0">
            <h4 className="">Retaining wall can give depth and structure to any yard. It can turn a plain yard into a amazing landscape. If you can dream it most likely we can do it. Steps built into retaining walls and planters add a new dimension of esthetics and functionality.</h4>
            <Link to="/gallery/walls-and-steps"> <button type="button" className="btn btn-lg btn-outline-danger">View in Gallery</button> </Link>
          </div>
        </div>

      </div>

      <div className="row my-4 pb-2">

        <div className="row pl-md-5">
          <h2><u className="pl-3">TERRACES & PATIOS</u></h2>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-12 pl-md-5">
            <Image source="/images/terrace-and-patios/elevation_003.JPG" alt="Patio Example" classes="rounded" />
          </div>
          <div className="col-md-6 col-sm-12 pl-md-4 pl-sm-0">
            <h4 className="">This is one more thing that is very popular with our costumers. This is a permanent structure that will outlast any deck and will significantly increase the value of your home</h4>
            <Link to="/gallery/terrace-and-patios"> <button type="button" className="btn btn-lg btn-outline-danger">View in Gallery</button> </Link>
          </div>
        </div>

      </div>

      <div className="row my-4 pb-2">

        <div className="row pl-md-5">
          <h2><u className="pl-3">BRICK ELEVATIONS</u></h2>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-12 pl-md-5">
            <Image source="/images/brick-elevations/DSCN2054.JPG" alt="Brick Elevation Example" classes="rounded" />

          </div>
          <div className="col-md-6 col-sm-12 pl-md-4 pl-sm-0">
            <h4 className="">Stone and brick walls provide a rich and elegant feel and look. Using them will give you that classic charm and style to an ordinary vinyl or synthetic stucco home. These materials are everlasting and provide thermal efficiency. </h4>
            <Link to="/gallery/brick-elevations"> <button type="button" className="btn btn-lg btn-outline-danger">View in Gallery</button> </Link>
          </div>
        </div>

      </div>

      <div className="row my-4 pb-2">

        <div className="row pl-md-5">
          <h2><u className="pl-3">STONE ELEVATIONS</u></h2>
        </div>

        <div className="row">
          <div className="col-md-5 col-sm-12 pl-md-5">
            <Image source="/images/stone-elevations/IMG_0370.JPG" alt="Stone Elevation Example" classes="rounded" />

          </div>
          <div className="col-md-6 col-sm-12 pl-md-4 pl-sm-0">
            <h4 className="">Stone and brick walls provide a rich and elegant feel and look. Using them will give you that classic charm and style to an ordinary vinyl or synthetic stucco home. These materials are everlasting and provide thermal efficiency. </h4>
            <Link href="/gallery/brick-elevations"> <button type="button" className="btn btn-lg btn-outline-danger">View in Gallery</button> </Link>
          </div>
        </div>

      </div>

      </div>

    </div>
  );
}

export default Services;

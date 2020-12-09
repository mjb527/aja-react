import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/carousel.css';

import HomeCarousel from '../../components/Carousel';
import Row from '../../components/Row';
import Container from '../../components/Container';

const Home = () => {

  const rows = [
    <div className="mx-2 mt-4">
      <h2 className="mb-2 mx-2"><u>OUR STORY</u></h2>

      <h5 className="mb-2 mx-2">AJA Masonry Corporation has been providing quality services and unbeatable prices in New Jersey since 1999. Our commitment to masonry excellence assures that your project will be completed on time and to your specification. Through all those years of service we have developed a history of successfully completing challenging projects, regardless of style or budget.</h5>
      <h5 className="mb-4 mx-2">We specialize in brick and stone elevations as well as fireplaces, chimneys, patios, steps and garden architectural design. Our highly trained staff includes individuals with many years of experience. We are known for using the latest in fabrication tools and technology. These qualities ensure that your project will be completed on time with the highest attention to detail. Our true love for this profession assures that you will get highest quality craftsmanship available that you and your project deserve.</h5>
    </div>,
    <div>
      <h2 className="mb-2 mx-2"><u>WHY USE STONE?</u></h2>

      <h5 className="mb-2 mx-2">The use of materials such as brick and stone can increase the thermal mass of a building, giving increased comfort in the heat of summer and the cold of winter, and can be ideal for passive solar applications.</h5>
      <h5 className="mb-2 mx-2">The appearance, especially when well crafted, can impart an impression of solidity and permanence.</h5>
      <h5 className="mb-2 mx-2">The wide selection of natural stone and bricks styles allow much variety in the appearance of the project.</h5>

      <h5 className="mb-4 mx-2">Natural stone and bricks are consider one of the longest lasting materials used in constructions and for decoration purpose. One of the advantages of having natural stone is its long lasting beauty. Builders and homeowners choose natural stone for its distinctive design and durability, and because it enhance the exterior or interior of any building. A stone-clad building has a natural elegance to it, which gives it a timeless quality.  We should mention that natural stone is one of the most ecologist material used in constructions and decorations today. Also use of brick can make a property very distinctive, because it is made to any shape and most sizes, and because it is a man-made material, can be very flexible in its quality and potential uses. </h5>
    </div>,
    <Link to="/services"><button className="btn btn-lg btn-outline-danger mb-4 mx-2" type="button" name="button">VIEW OUR SERVICES</button>
    </Link>,
    <div className="row w-100 mx-2">
      <h2 className="w-100 mb-4"><u>WHY AJA MASONRY?</u></h2>
      <div className="col-sm-12 col-md-6">
        <ul className="px-3">
          <li><h5>Quick, free estimates!</h5></li>
          <li><h5>Always on time!</h5></li>
        </ul>
      </div>

      <div className="col-sm-12 col-md-6 mb-4">
        <ul className="px-3">
          <li><h5>Ability to handle challenging projects!</h5></li>
          <li><h5>Satisfaction guaranteed!</h5></li>
        </ul>
      </div>
    </div>,
    <Link className="mx-2" to="/request"><button type="button" className="btn btn-lg btn-outline-danger"name="button">CONTACT US TODAY!</button></Link>
  ]

  let key = 0;

  return(
    <div className="mb-5">
      <HomeCarousel />
      <div className="mt-1" style={{ "backgroundColor": "#9c4d65", "height": "20px", "width": "100%" }}/>
      <Container content={ rows.map(content => <Row key={key++} className="mb-5 mx-5 px-sm-4 font-weight-bold" content={content} />)} />
    </div>
  );
}

export default Home;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from '../Image';

import '../../style/carousel.css';

const HomeCarousel = () => {

  const interval = 5000;

  const sources = [
    "images/stone-elevations/Bridal Path Mahwah (1).JPG",
    "images/stone-elevations/2011-06-28_10-41-44_476.jpg",
    "images/stone-elevations/DSCN2052.JPG"
  ];

  let key = 0;

  return(
    <Carousel pause={false} interval={interval}>
        {sources.map( source => {
          return(
          <Carousel.Item
            key={key++}
            >
            <Image
              classes="d-block w-100"
              source={source}
              alt="Example of AJA Masonry"
             />
          </Carousel.Item>
        )
      })}
    </Carousel>

  );
}

export default HomeCarousel;

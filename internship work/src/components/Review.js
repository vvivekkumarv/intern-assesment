import React from 'react';
import { Carousel } from 'react-bootstrap';

import image8 from './../assetss/imagess/review4.png';
import image9 from './../assetss/imagess/review1.png';
import image10 from './../assetss/imagess/review2.png';
import image11 from './../assetss/imagess/review3.png';


const Review = () => {
  return (
<div className="mass">
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image8}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>homecare1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image9}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>homecare2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image10}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>homecare3.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image11}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>homecare4.</p>
        </Carousel.Caption>
       </Carousel.Item>
      
      
    </Carousel>
</div>
  )
}

export default Review;
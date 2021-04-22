import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/1.png';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';
import image4 from './../assets/images/4.png';
import image5 from './../assets/images/5.jpg';
import image6 from './../assets/images/6.jpg';
import image7 from './../assets/images/7.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
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
          src={image2}
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
          src={image3}
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
          src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>homecare4.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>homecare5.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>sixth slide label</h3>
          <p>homecare6.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image7}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>seventh slide label</h3>
          <p>homecare7.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import tm1 from './pictures/tm1.jpg';
import tm2 from './pictures/tm2.jpg';
import tm3 from './pictures/tm3.jpg';
import desk1 from './pictures/desk1.jpg';
import desk2 from './pictures/desk2.jpg';
import wall1 from './pictures/wall1.jpg';
import wall2 from './pictures/wall2.jpg';
import wall3 from './pictures/wall3.jpg';

const hobbies = () => {
  return (
    <div className="container-fluid">
      <Carousel className="carousel" >

        <Carousel.Item className="">
          <Image className="d-block w-100" src={tm1} fluid alt="first slide" id="tm1" thumbnail />
          <Carousel.Caption>
            <h2>The Outdoors</h2>
            <p>Easier part of the run</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={tm2} fluid alt="first slide" id="tm2" thumbnail />
          <Carousel.Caption>
            <h2>The Outdoors</h2>
            <p>Another obstacle</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={tm3} fluid alt="first slide" id="tm3" thumbnail />
          <Carousel.Caption>
            <h2>The Outdoors</h2>
            <p>Hardest part of the run</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <hr />

      <Carousel className="carousel">

        <Carousel.Item>
          <Image className="d-block w-100" src={wall1} fluid alt="wood wall 1" id="woodwork" thumbnail />
          <Carousel.Caption>
            <h2>Wood work</h2>
            <p>Made an accent wall using wood pallets</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100 round" src={wall2} fluid alt="wood wall 2" id="woodwork" thumbnail />
          <Carousel.Caption>
            <h2>Wood Work</h2>
            <p>Made an accent wall using wood pallets</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100 round" src={wall3} fluid alt="wood wall 3" id="woodwork" thumbnail />
          <Carousel.Caption>
            <h2>Wood Work</h2>
            <p>HMade an accent wall using wood pallets</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100 round" src={desk1} fluid alt="folding desk" id="woodwork" thumbnail />
          <Carousel.Caption>
            <h2>Wood Work</h2>
            <p>Created a folding desk in the closet of my man cave</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100 round" src={desk2} fluid alt="folding desk 2" id="woodwork" thumbnail />
          <Carousel.Caption>
            <h2>Wood Work</h2>
            <p>Created a folding desk in the closet of my man cave</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div >
  );
};

export default hobbies;

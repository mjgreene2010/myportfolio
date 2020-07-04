import React from 'react';
import { Carousel } from 'react-bootstrap';

const jumbotron = () => {
  return (
    <div className="jumbotron jumbrotron-fluid text-center" id="jumbotron">
      {/* <div className="container-fluid"> */}
      <Carousel className="carousel-jumbo" >
        <Carousel.Item className="">
          <div className="jumbotron-text">
            <h1>Welcome to Michael Greene's Portfolio</h1>
          </div>
        </Carousel.Item>

        <Carousel.Item className="">
          <div className="jumbotron-text">
            <h1>Currently working on: App Academy Open course
              <a className="app_academy_open" href="https://open.appacademy.io/"></a>
            &nbsp; &nbsp;
            </h1>
          </div>
        </Carousel.Item>

        <Carousel.Item className="">
          <div className="jumbotron-text">
            <h1>Thank You For Visiting</h1>
          </div>
        </Carousel.Item>

      </Carousel>

    </div>
    // </div>
  );
};

export default jumbotron;

import React from 'react';
import Image from 'react-bootstrap/Image';
import profile from './pictures/profile.jpg';
import './App.css'

const home = () => {
  return (
    <div className="container-fluid home">
      <div className="row">


        <Image className="col-6" id="profile" src={profile}></Image>


        <div className="col">
          <p>
            Hello & Welcome to my portfolio page.
            I am a Full Stack Web Developer who creates and design websites and applications.
          </p>
          <p>
            My journey into coding initially started when I was a sophmore in college. At that time, the direction I had planned to take my career in was more toward graphic design. But at that time, I learned the basics of HTML, CSS and JavaScript. Years after those web design classes, the opportunity to code came back. Unlike before, this time I did my research on software development and all the exciting opportunity that came with it. After all the research I did, I knew it was time to pursue a career in Software Develope which is what led me to Flatiron School.
          </p>
          <p>
            My love for coding has grown since starting the Flatiron school. I completed the bootcamp in March and I was extremely proud of that accomplishment.
          </p>
          <p>
            So again, welcome to my page and I hope you are able to learn a bit about me through my page.
          </p>
        </div>

      </div>
    </div>
  );
};

export default home;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

// .collapse.navbar - collapse

const navbar = () => {
  return (
    <div className="container-fluid ">
      <div className="navbar navbar fixed-top navbar-light" id="navbar">
        <div className="container">
          <NavLink
            className="btn"
            type="button"
            exact to="/"
            activeStyle={{ background: '', color: 'white'}}
          >
            <h4>Home</h4>
          </NavLink>

          <NavLink
            className="btn"
            exact
            to="/resume"
            activeStyle={{ background: '', color: 'white' }}
          >
            <h4>Resume</h4>
          </NavLink>

          <NavLink
            className="btn"
            exact
            to="/projects"
            activeStyle={{ background: '', color: 'white' }}
          >
            <h4>Projects</h4>
          </NavLink>

          <NavLink
            className="btn"
            exact
            to="/hobbies"
            activeStyle={{ background: '', color: 'white' }}
          >
            <h4>Hobbies & Interest</h4>
          </NavLink>

          {/* <NavLink */}
          <div
            className="btn"
          // exact
          // to="/contact-info"
          // activeStyle={{ background: '', color: 'white' }}
          >
            {/* <h4>Contact Info</h4> */}
          </div>
          {/* </NavLink> */}

          <div>
            <a className="fab fa-linkedin fa-2x" href="https://www.linkedin.com/in/michael-greene-37a47151/"></a>
            &nbsp; &nbsp;
            <a className="fab fa-instagram fa-2x" href="https://www.instagram.com/greene_vision/?hl=en"></a>
            &nbsp; &nbsp;
            <a className="fab fa-facebook fa-2x" href="https://www.facebook.com/profile.php?id=20616467"></a>
            &nbsp; &nbsp;
            <a className="fab fa-twitter fa-2x" href="https://twitter.com/greene_vision"></a>
          </div>

        </div>
      </div>
    </div >
  );
};

export default navbar;

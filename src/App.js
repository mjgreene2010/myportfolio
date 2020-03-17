import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Jumbotron from './jumbotron';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
import Hobbies from './hobbies';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Router>
            <Navbar />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact-info" component={Contact} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/hobbies" component={Hobbies} />
            </Switch>
          </Router>
        </div>
        <footer>&copy; 2020 Created by Michael Greene</footer>
      </div>
    );
  }
}

export default App;

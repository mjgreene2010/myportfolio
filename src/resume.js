import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const resume = () => {
  return <div className="container-fluid">

    <Accordion >

      <Card>
        <Card.Header>
          <Accordion.Toggle /* as={Button} */ eventKey="0">
            PROJECTS
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h2>PROJECTS</h2>
            < br />

            <h3>Full Stack Downs Mobile Auto Repair App</h3>
            <p>Bulit an app capable of receiving orders from customers with detailed information and the response by admin.</p>
            <ul>
              <li>React framework used for user interface in the browser</li>
              <li>Created a Rails API backend with endpoints for users, services and orders with a PostgreSQL database</li>
              <li>Utilized CSS in its own file for styling</li>
              <li>JSON web tokens and loal storage used to store encrypted user information</li>
              <li>Implemented anadmin only function to see all client information and orders</li>
            </ul>

            < br />

            <h3>Full Stack Eat Clean App</h3>
            <p>Bulit an app capable of tracking systems of meals, recipes and nutritional values of the ingredients in the meal.</p>
            <ul>
              <li>Created a Rails API backend with endpoints for users and dishes</li>
              <li>React framework used on the frontend</li>
              <li>Utilized CSS inline styling as well as CSS stand alone file</li>
              <li>Used SQLite database to store data of the app</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle /* as={Button} */ variant="link" eventKey="1">
            TECHNICAL SKILLS
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {/* <Container> */}
            <h2>TECHNICAL SKILLS</h2>
            < br />
            <Row>
              <Col xs={4}> <h6>Porgramming Languages:</h6> <p>JavaScript(ES6/ES7), Ruby</p> </Col>
              <Col xs={4}> <h6>Markup Language:</h6> <p>HTML(HTML5)</p> </Col>
              <Col xs={4}> <h6>Cascade Styling Sheet:</h6> <p>CSS3, Bootstrap</p> </Col>
              <Col xs={4}> <h6>Databases:</h6> <p>SQLite, PostgreSQL</p> </Col>
              <Col xs={4}> <h6>Frameworks:</h6> <p>React, Ruby on Rails</p> </Col>
              <Col xs={4}> <h6>Library:</h6> <p>Redux</p> </Col>
              <Col xs={4}> <h6>Creative Adobe:</h6> <p>Photoshop, Illustrator, InDesign</p> </Col>
              <Col xs={4}> <h6>Microsoft Office:</h6> <p>Word, Excel, Powerpoint, Outlook</p> </Col>
              <Col xs={4}> <h6>Other:</h6> <p>RESTful APIs</p> </Col>
            </Row>
            {/* </Container> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle /* as={Button} */ variant="link" eventKey="2">
            EXPERIENCE
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <h2>EXPERIENCE</h2>
            < br />
            <div>
              <Row>
                <Col xs={4}>
                  <h6>Sherwin Williams</h6>
                  <p>Houston, TX</p>
                </Col>
                <Col xs={4}>
                  Operations Manager
                </Col>
                <Col xs={4}>
                  Aug 2016-Oct 2018
                </Col>
                <Col>
                  <ul>
                    <li>Increased store volum by 10% compared to the prvious year's sales</li>
                    <li>Developed procedures designed to maintian efficient store operations</li>
                    <li>Improved customer relations by training assoiates to handle complains comprehensively and immediately</li>
                    <li>Reviewed business need and store data to manage perpetual inventory and improve operational efficiency</li>
                  </ul>
                </Col>
              </Row>
            </div>

            < br />
            <Row>
              <Col xs={4}>
                <h6>Wal-Mart</h6>
                <p>Irving, TX/Fayetteville, AR</p>
              </Col>
              <Col xs={4}>
                Department Manager/Wireless Associate
                </Col>
              <Col xs={4}>
                Jun 2012-Apr 2016
                </Col>
              <Col>
                <ul>
                  <li>Coordinated promotional material togenerate increasedrevenue</li>
                  <li>Developed relationships by tailoring plans tomeet customer needs</li>
                </ul>
              </Col>

            </Row>


          </Card.Body>
        </Accordion.Collapse>
      </Card>


      <Card>
        <Card.Header>
          <Accordion.Toggle /* as={Button} */ variant="link" eventKey="3">
            EDUCATION
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <h2>EDUCATION</h2>
            < br />
            <Row>
              <Col xs={10}>
                <p>Flatiron School, Houston, TX</p>
                <h6>Immersive Software Engineering Bootcamp</h6>
              </Col>
              <Col xs={2}>March 2019</Col>
            </Row>
            < br />
            <Row>
              <Col xs={10}>
                <p>University of Dallas, Irving, TX</p>
                <h6>Master of Business Adminstration</h6>
              </Col>
              <Col xs={2}>August 2016</Col>
            </Row>
            < br />
            <Row>
              <Col xs={10}>
                <p>University of Arkansas, Fayetteville, AR</p>
                <h6>Bachelor of Art, Graphic Design</h6>
              </Col>
              <Col xs={2}>August 2010</Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>

  </div>;
};

export default resume;

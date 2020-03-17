import React from 'react';
import './App.css'

const contactInfo = () => {
  return (
    <div className="contactinfo ">
      <header>
        <h1>Contact Me</h1>
      </header>

      <h2>Information Request</h2>
      <form action="submit.html" method="POST">
        <label for="firstName">First Name: </label>
        <br />
        <input type="text" id="firstName" name="firstName" />
        <br />
        <label for="lastName">Last Name: </label>
        <br />
        <input type="text" id="lastName" name="lastName" />
        <br />
        <label for="phone">Phone Number: </label>
        <br />
        <input type="text" id="phone" name="phone" />
        <br />

        <br />

        <label for="contact">Best Time to Call:</label>
        <br />
        <select id="contact" name="contact">
          <option value="default" selected>
            --select one--
          </option>
          <option value="morning">Morning (8AM to 12PM Central)</option>
          <option value="afternoon">Afternoon (12PM to 5PM Central)</option>
          <option vaule="evening">Evening (5PM to 8PM Central)</option>
        </select>

        <br />
        <br />

        <fieldset>
          <legend>This position is for: </legend>
          <input
            type="checkbox"
            name="web_development_position"
            value="Front End Web Development"
          />
          <label for="frontEnd">Front-End Web Development</label>
          <br />
          <input
            type="checkbox"
            name="web_development_position"
            value="Back End Web Development"
          />
          <label for="backEnd">Back-End Web Development</label>
          <br />
          <input
            type="checkbox"
            name="web_development_position"
            value="User Interface"
          />
          <label for="frontEnd">User Interface</label>
          <br />
          <input
            type="checkbox"
            name="web_development_position"
            value="Other"
          />
          <label for="frontEnd">Other</label>
          <br />
        </fieldset>

        {/* <br /> */}

        {/* <fieldset>
          <legend>I have filled in the client questionnaire form:</legend>
          <input type="radio" name="questionnaire" value="Yes" />
          <label for="yes"> Yes </label>
          <br />
          <input type="radio" name="questionnaire" value="No" />
          <label>No</label>
        </fieldset> */}

        <br />

        <label for="info">Additional Information:</label>
        <br />
        <textarea id="info" name="info"></textarea>
        <br />

        <br />

        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
};

export default contactInfo;

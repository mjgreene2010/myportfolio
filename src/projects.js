import React from 'react';
import Table from 'react-bootstrap/Table'

const projects = () => {
  return (
    <div className="projects">
      <Table responsive="sm" striped bordered hover variant="light" size="sm">
        <thead>
          <tr>
            <th>Name of App</th>
            <th>GitHub</th>
            <th>Demo</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Downs Mobile Auto Repair App</td>
            <td>
              <a href="https://github.com/mjgreene2010/Downs-Mobile-Auto-Repair">Github</a>
            </td>
            <td>
              <a href="https://www.youtube.com/watch?v=11fwMbAzB9s&feature=youtu.be">Demo</a>
            </td>
            <td>x</td>
          </tr>
          <tr>
            <td>Eat Clean App</td>
            <td>
              <a href="https://github.com/mjgreene2010/Eat_Clean_App">Github</a>
            </td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Vacation App (under construction)</td>
            <td>
              <a href="https://github.com/mjgreene2010/vacation-app">Github</a>
            </td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default projects;

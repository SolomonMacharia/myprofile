import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center text-uppercase font-details-b pb-3">experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h1 className="text-capitalize font-weight-bold">certeon technology limited</h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center text-capitalize">intern software developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style text-capitalize ">full stack developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, Python/Flask, MongoDb, Selenium
                    <br />
                    <strong>Duration:</strong> November 2019 - March 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <p>Was involved in creating an <strong>E-learning</strong> web application platform in Python/
                        Flask, React.</p>
                      <li>Worked <strong>productively</strong> with my team to understand the requirements and business
                          specifications around the project.</li>
                      <li><strong>Effectively</strong> coded software changes and alterations based on specific design specifications.</li>
                      <li>Worked to solve complex problems using the latest in Mobile, and Web Technologies.</li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li>
                      <li>Developed and presented findings and solutions to fellow team members and my project manager.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h1 className="text-capitalize font-weight-bold">andela kenya</h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center text-capitalize">andela bootcamp software developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style text-capitalize ">full stack developer</strong>
                    <br />
                    <strong>Technology:</strong> Python/Flask, Postgresql, HTML5, CSS3, TravisCi, Heroku
                    <br />
                    <strong>Duration:</strong> September 2017 - January 2018
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <p>I underwent a very intense and immersive Bootcamp experience in Andela Kenya
                          where I got to build a web application called Questioner (A web application that helps
                          meetup organizers crowd-source and prioritize questions for future meetups).
                          In the Bootcamp, I;</p>
                      <li>Successfully worked at an independent level, while also serving as an <strong>effective</strong>
                          and <strong>enthusiastic collaborator</strong>.</li>
                      <li>Learned how to create <strong>Restful APIs</strong> with <b>Python</b> and the <b>Flask</b> framework.</li>
                      <li>Implemented the use of <b>python data structures</b> for storing application records.</li>
                      <li>Later integrated the application with a <b>SQL database(PostgreSQL)</b>.</li>
                      <li>Performed automated testing tasks and developed complex features routinely.</li>
                      <li>Learned the use of continuous integration.</li>
                      <li><strong>Effectively</strong> coded software changes and alterations based on specific design specifications.</li>
                      <li>Developed and presented findings and solutions to fellow team members and my project manager.</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;

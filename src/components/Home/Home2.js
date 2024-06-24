import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello there! I'm Alejandro, a passionate web developer
              with a knack for crafting dynamic and engaging web experiences.
              Welcome to my digital playground, where creativity meets
              functionality, and every line of code tells a story.
              <br />
              <br />
              <i>
                <b className="purple"> About Me </b>
              </i>
              <br />
              My journey in the world of web development began with a curiosity-driven exploration of HTML and CSS, which quickly evolved into a deep dive into the world of JavaScript. From crafting interactive user interfaces with React.js. &nbsp;
              
              <br />
              <br />
              <i>
                <b className="purple"> Front-End Technologies I Work With: </b>
              </i>
              <br />I specialize in leveraging the latest front-end technologies
              to create stunning user experiences. Some of the tools and
              frameworks I work with include:
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Sass/SCSS</li>
                <li>Bootstrap</li>
                <li>Styled Components</li>
                <li>Webpack</li>
                <li>And more incoming......</li>
              </ul>
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/byalejr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/byalejr1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jacoboarg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/alerjacobo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

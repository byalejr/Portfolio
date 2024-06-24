import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Expo Culture"
              description="website for an event organized in Romania to be able to share about the culture of all the countries of the world and share about food, culture, traditions in which there was an online payment gateway"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Nueva Esperanza "
              description="a web application for a heavy transport union in charge of managing the entire company, its contract assignment processes, settling accounts, managing all the data of its members and cars in order to have the entire company organized in an optimal way"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fundación Porvenir"
              description="website for a foundation in charge of teaching and supporting low-income students as well as supporting their family, not only financial support but also training them as a person"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Farmacia Vida Sana"
              description="Web application for a pharmacy in which they can offer online consultation services at home, both consultations and delivery of health products and an integrated online store."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AgroBol"
              description="website for an agronomic company that is responsible for growing food plants, creating landscapes for cultivation that offers services with packages included to have a variety of clients"
              
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Patitas Felices Vet"
              description="website for a veterinarian that offers services, care and cuts at home as well as an e-commerce within the website in which they offer different products for the care of your pet."
              
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          And <strong className="purple">Many More.... </strong>
        </h1>
        <p style={{ color: "white" }}>
          on the way.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;

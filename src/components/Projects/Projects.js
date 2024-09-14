import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";


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
              title="website for job promotion"
              description="
Developed a modern, responsive website for silzingles to enhance its online presence, showcasing courses, testimonials, and resources with a user-friendly design. The site improves visibility and facilitates easy student enrollment."
              demoLink="silzingles.com"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="website for job promotion"
              description="
Developed a modern, responsive website for silzingles to enhance its online presence, showcasing courses, testimonials, and resources with a user-friendly design. The site improves visibility and facilitates easy student enrollment."
              demoLink="silzingles.com"
              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

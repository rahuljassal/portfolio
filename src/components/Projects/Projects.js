import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import spotify from "../../Assets/Projects/Spotify.png";
import youtube from "../../Assets/Projects/Youtube.png";
import node from "../../Assets/Projects/Node.png";

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
              imgPath={spotify}
              isBlog={false}
              title="JusMusic"
              description={`jusMusic is a dynamic music streaming platform built with a modern tech stack, including React, Tailwind CSS, Node.js, Express, and MongoDB. Users can discover and stream their favorite tunes, while administrators enjoy the flexibility of adding new songs and albums through a dedicated admin app.`}
              ghLink="https://github.com/rahuljassal/jusmusic"
              demoLink="https://rahul-jassal-jusmusic.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="TubeClone"
              description="Dive into the world of video content with TubeClone, a feature-rich YouTube replica built with React, Redux Toolkit, Moment, React Icons, React Router DOM, and Tailwind CSS."
              ghLink="https://github.com/rahuljassal/youtube-clone"
              demoLink="https://rahul-jassal-youtube-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node}
              isBlog={false}
              title="Contact Manager"
              description="Built a scalable and secure contact management system with CRUD operations, user authentication, and error handling using Node.js, Express, MongoDB, and JWT authentication."
              ghLink="https://github.com/rahuljassal/contacts"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

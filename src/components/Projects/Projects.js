import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import spotify from "../../Assets/Projects/Spotify.svg";
import youtube from "../../Assets/Projects/Youtube.svg";
import node from "../../Assets/Projects/Node.svg";
import email from "../../Assets/Projects/email.svg";
import direct from "../../Assets/Projects/directSupply.svg";
import chess from "../../Assets/Projects/chess.svg";
const ProjectCard = React.lazy(() => import("./ProjectCards"));
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
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={spotify}
                isBlog={false}
                title="Spotify Clone"
                description="Built a Spotify clone using React.js, Redux for state management, and the Spotify Web API for music data. Features include user authentication, playlist management, and real-time music playback."
                ghLink="https://github.com/rahuljassal/spotify-clone"
                demoLink="https://spotify-clone-rahul.vercel.app/"
              />
            </Suspense>
          </Col>
          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={chess}
                isBlog={false}
                title="Chess Game"
                description="A fully-featured chess game built with React 18, Vite ,TypeScript, Tailwind CSS, Radix UI Components & shadcn/ui, featuring a complete implementation of chess rules, piece movement validation, and game state management."
                ghLink="https://github.com/rahuljassal/Chess-Game"
                demoLink="https://chess-game-olive-eight.vercel.app/"
              />
            </Suspense>
          </Col>
          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={youtube}
                isBlog={false}
                title="Youtube Clone"
                description="Created a YouTube clone using React.js and the YouTube Data API. Implemented features like video search, playback, and comments. Used Material-UI for styling and Redux for state management."
                ghLink="https://github.com/rahuljassal/youtube-clone"
                demoLink="https://youtube-clone-rahul.vercel.app/"
              />
            </Suspense>
          </Col>

          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={node}
                isBlog={false}
                title="Node.js API"
                description="Developed a RESTful API using Node.js, Express, and MongoDB. Implemented user authentication, CRUD operations, and file uploads. Used JWT for secure authentication."
                ghLink="https://github.com/rahuljassal/node-api"
                demoLink="https://node-api-rahul.vercel.app/"
              />
            </Suspense>
          </Col>

          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={email}
                isBlog={false}
                title="Email Client"
                description="Built an email client using React.js and Firebase. Features include sending/receiving emails, attachments, and real-time notifications."
                ghLink="https://github.com/rahuljassal/email-client"
                demoLink="https://email-client-rahul.vercel.app/"
              />
            </Suspense>
          </Col>

          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={direct}
                isBlog={false}
                title="Direct Supply"
                description="Developed a supply chain management system using React.js and Node.js. Implemented features like inventory tracking, order management, and analytics."
                ghLink="https://github.com/rahuljassal/direct-supply"
                demoLink="https://direct-supply-rahul.vercel.app/"
              />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

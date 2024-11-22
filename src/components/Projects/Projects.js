import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/Spotify.png";
import youtube from "../../Assets/Projects/Youtube.png";
import node from "../../Assets/Projects/Node.png";
import email from "../../Assets/Projects/email.png";
import direct from "../../Assets/Projects/directSupply.png";

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
              description={`🎵 jusMusic: Your Ultimate Music Streaming Experience! Built with React, Tailwind CSS, Node.js, Express, and MongoDB, jusMusic lets users explore and stream their favorite tracks seamlessly. With a dedicated admin app for managing songs and albums, it's a perfect blend of music discovery and admin control. Tune in and take control! 🚀🎶 `}
              ghLink="https://github.com/rahuljassal/jusmusic"
              demoLink="https://rahul-jassal-jusmusic.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="TubeClone"
              description="📺 TubeClone: Your Gateway to a YouTube-Like Experience! Explore, watch, and enjoy video content on this sleek replica built with React, Redux Toolkit, Moment.js, React Icons, React Router DOM, and Tailwind CSS. Packed with features and a modern design, TubeClone is where functionality meets style. 🚀🎥"
              ghLink="https://github.com/rahuljassal/youtube-clone"
              demoLink="https://rahul-jassal-youtube-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Email Automater"
              description="🚀 Automate Your Job Hunt: A sleek Python script that simplifies outreach by reading HR details from an Excel file and sending personalized emails effortlessly. Perfect for job seekers looking to save time and make a professional first impression! 📧📋"
              ghLink="https://github.com/rahuljassal/email_automater"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={direct}
              isBlog={false}
              title="Direct Supply"
              description="🌟 Resource Management Made Easy: A powerful web app built with React JS, Python Flask, Material-UI, Redux, RTK Query, and SQLite, designed to streamline and optimize resource allocation. Effortlessly manage, track, and allocate resources with an intuitive UI and robust backend. Perfect for individuals and teams looking to boost productivity! 🚀📊"
              ghLink="https://github.com/rahuljassal/direct-supply"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={node}
              isBlog={false}
              title="Contact Manager"
              description="📇 Contact Keeper: A Scalable & Secure Contact Management System! Built with Node.js, Express, MongoDB, and JWT authentication, this app offers seamless CRUD operations, robust user authentication, and comprehensive error handling. Perfect for managing your contacts with security and efficiency! 🚀🔒"
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

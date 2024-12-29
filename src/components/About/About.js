import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
const Github = React.lazy(() => import("./Github"));
const Techstack = React.lazy(() => import("./Techstack"));
const Aboutcard = React.lazy(() => import("./AboutCard"));
const Toolstack = React.lazy(() => import("./Toolstack"));

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Suspense fallback={<div>Loading...</div>}>
              <Aboutcard />
            </Suspense>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              loading="lazy"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Suspense fallback={<div>Loading...</div>}>
          <Techstack />
        </Suspense>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Toolstack />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Github />
        </Suspense>
      </Container>
    </Container>
  );
}

export default About;

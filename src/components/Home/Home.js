import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
const Home2 = React.lazy(() => import("./Home2"));
const Type = React.lazy(() => import("./Type"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAHUL JASSAL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Type />
                </Suspense>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Home2 />
      </Suspense>
    </section>
  );
}

export default Home;

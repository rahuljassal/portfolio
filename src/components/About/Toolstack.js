import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPycharm,
} from "react-icons/si";
import TextTitle from "./TextTitle";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <TextTitle text="MacOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <TextTitle text="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <TextTitle text="Pycharm" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <TextTitle text="Postman" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <TextTitle text="Vercel" />
      </Col>
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlask,
  SiGooglecloud,
  SiFastapi,
  SiExpress,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import TextTitle from "./TextTitle";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <TextTitle text="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <TextTitle text="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <TextTitle text="NodeJS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <TextTitle text="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <TextTitle text="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <TextTitle text="Express" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <TextTitle text="Flask" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <TextTitle text="Google Cloud" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <TextTitle text="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <TextTitle text="FastAPI" />
      </Col>
    </Row>
  );
}

export default Techstack;

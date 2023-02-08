import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dic from "../../Assets/Projects/dic.png";
import cert from "../../Assets/Projects/logo.png";
import c2l from "../../Assets/Projects/cpp2latex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Silicon Ghati of <strong className="purple">Web-Tools </strong>
        </h1>
        <p style={{ color: "white" }}>
        Tools meant to simplify workflow!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dic}
              isBlog={false}
              title="Dynamic Instructions Calculation"
              description="An open-source tool to find the frequency of different assembly instructions of an executable file to be executed."
              ghLink="https://github.com/Silicon-Ghati/Dynamic-Instructions-Calculation"
              demoLink="https://instructions.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c2l}
              isBlog={false}
              title="cpp2latex"
              description="About
              A tool converting C++ functions to LaTeX pseudo-code, reducing time spent on professional writing by over 90%."
              ghLink="https://github.com/Silicon-Ghati/cpp2latex"
              demoLink="https://cpp2latex-1.ayushr12.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert}
              isBlog={false}
              title="Bulk Certificate Generator"
              description="Python script to create bulk amount of certificates and mail them to respective email ids and save the data of the certificates for verification purposes."
              ghLink="https://github.com/Silicon-Ghati/Bulk-Certificate-Maker"
              demoLink="https://github.com/Silicon-Ghati/Bulk-Certificate-Maker"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

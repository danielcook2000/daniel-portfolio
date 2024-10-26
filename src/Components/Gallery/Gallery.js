import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Gallery() {
  // Dynamically load images from Gallery folder
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);

  const images = importAll(
    require.context("../../Assets/Gallery", false, /\.(png|jpe?g|svg)$/)
  );

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
          {images.map((imgPath, index) => (
            <Col key={index} md={3} className="project-card">
              <ProjectCard imgPath={imgPath} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;

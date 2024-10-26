import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="proImg">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
    </Card>
  );
}
export default ProjectCards;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Cake,
  UtensilsCrossed,
  ShieldCheck,
  FileText,
  Palette,
  Cookie,
} from "lucide-react";

function Skillstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Cake size={60} />
        <p>Pastry Baking</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <UtensilsCrossed size={60} />
        <p>Pattiseries Equipment Ops.</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ShieldCheck size={60} />
        <p>Food Safety and Sanitation</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FileText size={60} />
        <p>Recipe Development</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Palette size={60} />
        <p>Cake Decoration</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Cookie size={60} />
        <p>Bread making</p>
      </Col>
    </Row>
  );
}

export default Skillstack;

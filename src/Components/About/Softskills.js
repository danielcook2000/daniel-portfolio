import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Lightbulb,
  Clock,
  Users,
  Layers3,
  MessageCircle,
  Scan,
  HeartHandshake,
} from "lucide-react";

function Softskills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Lightbulb size={60} />
        <p>Creativity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Clock size={60} />
        <p>Time Management</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Users size={60} />
        <p>Team work</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Layers3 size={60} />
        <p>Multi-tasking</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MessageCircle size={60} />
        <p>Communication</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Scan size={60} />
        <p>Attention to Detail</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <HeartHandshake size={60} />
        <p>Flexibility</p>
      </Col>
    </Row>
  );
}

export default Softskills;

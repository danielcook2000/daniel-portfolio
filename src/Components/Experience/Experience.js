import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Pastry Cook",
      company: "Accuro Specialist and Support Services - Dubai, UAE",
      duration: "July 2023 - Present",
      description:
        "Specialized in preparing desserts and ensuring high standards in food safety and patient care.",
      responsibilities: [
        "Serving food to patients according to their diet with special care.",
        "Following high standards of hygiene and HACCP procedures.",
        "Preparing sugar-free desserts, cakes, and puddings for patients.",
        "Ensuring correct food and cooling temperatures according to HACCP procedures.",
        "Maintaining food safety practices.",
      ],
    },
    {
      title: "Bakery and Pastry Cook - Commi II",
      company: "The Residency Tower - A Five-star Hotel - Chennai, India",
      duration: "May 2023 - July 2023",
      description:
        "Assisted in the production of bakery and pastry items, ensuring adherence to high standards of presentation, taste, and food safety.",
      responsibilities: [
        "Prepared a variety of pastries, breads, and desserts, adhering to recipes and presentation standards.",
        "Followed health, hygiene, and HACCP procedures to ensure product safety and quality.",
        "Keep records of supplies and equipment inventories",
        "Monitored and maintained the temperature of ingredients and finished products to ensure freshness.",
        "Ensure quality of finished products by checking them for taste and presentation.",
      ],
    },
    {
      title: "Bakery and Pastry Assistant - Commi III",
      company: "Fragrant Nature - A Five-star Hotel - Kochi, India",
      duration: "March 2022 - March 2023",
      description:
        "Supported the pastry team in preparing quality baked goods while ensuring a high standard of cleanliness and adherence to food safety protocols.",
      responsibilities: [
        "Assisted in the preparation of baked items like pastries, bread, and desserts under the guidance of senior chefs.",
        "Ensured cleanliness of work areas and maintained hygiene standards at all times.",
        "Followed HACCP procedures for safe food handling, storage, and temperature control.",
        "Assisted in managing inventory and restocking ingredients for daily operations.",
        "Participated in regular training to improve baking and decorating skills.",
      ],
    },
    // {
    //   title: "Bakery and Pastry Assistant - Commi III",
    //   company: "Toscano - Chennai, India",
    //   duration: "December 2021 - January 2022",
    //   description:
    //     "Supported the pastry team in preparing quality baked goods while ensuring a high standard of cleanliness and adherence to food safety protocols.",
    //   responsibilities: [
    //     "Measure and mix ingredients according to recipes using various kitchen utensils and equipment.",
    //     "Operate and maintain baking and kitchen equipment",
    //     "Maintain a clean and sanitary work area",
    //     "Assisted in managing inventory and restocking ingredients for daily operations.",
    //     "Participated in regular training to improve baking and decorating skills.",
    //   ],
    // },
    {
      title: "Trainee",
      company: "The HillTop Hotel - Kodaikanal, India",
      duration: "February 2021 - May 2021",
      description:
        "Gained hands-on experience in a professional kitchen environment through a comprehensive training program at The HillTop Hotel",
      responsibilities: [
        "Measure and mix ingredients according to recipes using various kitchen utensils and equipment.",
        "Operate and maintain baking and kitchen equipment",
        "Maintain a clean and sanitary work area",
        "Assisted in managing inventory and restocking ingredients for daily operations.",
        "Participated in regular training to improve baking and decorating skills.",
      ],
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          <strong className="purple">My Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few positions I've held over the years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, index) => (
            <Col md={6} key={index} className="experience-card">
              <Card className="d-flex flex-column shadow-sm p-3 mb-5 bg-dark text-white bg-gray-800">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-2 purple">
                    {exp.company}
                  </Card.Subtitle>
                  <Card.Text>
                    <small>{exp.duration}</small>
                  </Card.Text>
                  <Card.Text>{exp.description}</Card.Text>

                  {/* Render responsibilities if they exist */}
                  {exp.responsibilities && (
                    <div>
                      <strong>Duties & Responsibilities:</strong>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

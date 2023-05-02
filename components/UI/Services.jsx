import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-computer-line" />
                <ServicesItem title="Coding Education" icon="ri-apps-line" />
              </div>

              <ServicesItem
                title="Coding Advocacy"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Responsive and </h3>
            <h3 className="mb-4">Dynamic user interface</h3>
            <p>
              I create Responsive and Dynamic user interface that guarantees
              fast load times and lag free interaction. I love structure and
              order and I also stand for quality. I love spending time on fixing
              little details and optimizing and building awesome web apps.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

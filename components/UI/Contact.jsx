import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact me</h3>
            <p>
              Kindly reach out to me via any of these mediums. I will be glad to
              work with you on your next project.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Lagos-Nigeria</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>akanbifatimah@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+234 8137 433 3258</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/akanbifatimah">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/fatimah-akanbi-746992159/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.youtube.com/channel/UCiWaaD-8VtUCcMmMWt39xTQ">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="https://twitter.com/FatimahAkanbi2">
                <i className="ri-twitter-line"></i>
              </Link>
              
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

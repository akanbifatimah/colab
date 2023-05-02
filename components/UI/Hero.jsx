import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/Headshot.jpeg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Fatimah Akanbi</h2>
              <h5 className="mb-4">A Frontend Developer</h5>
              <p>
                I have an eye for design, creativity, and crafting smooth user
                Experience. Skilled in solving Technical problems using
                technologies such as NextJs, React, Javascript, ChakraUI,
                Bootstrap, TailwindCSS, HTML and CSS Javascript, React,
                bootstrap, SQL, Node js and ExpressJS.
                <br /> <br /> Focused on being a valuable part of any team I am
                on and believe in the team rising together. I am always willing
                to help whenever any member of the team needs assistance. I
                enjoy building everything from small business sites to big
                interactive web apps.
                <br /> <br /> I enjoy mentoring biginners in tech and guiding
                them on the best approach to a succesful career journey. I run a
                youtube channel where I teach different topics in web
                development and simplify the process for biginners.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link
                    href="https://www.linkedin.com/in/fatimah-akanbi-746992159/"
                    target="_blank"
                  >
                    Hire me
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link
                    href="https://drive.google.com/file/d/1if-2PqEUt8r9vACf9mub-WVm9KYMg2ty/view?usp=sharing"
                    target="_blank"
                  >
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image
                className="img-fluid"
                alt="hero-image"
                src={heroImg}
                width="550"
                height="650"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

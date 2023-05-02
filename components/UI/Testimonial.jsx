/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import axios from "axios";
import classes from "../../styles/testimonial.module.css";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        setQuotes(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuotes();
  }, []);
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Quotes" />
            <h4 className="mt-4 mb-5">My Favourite quotes 😇😎</h4>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <Slider {...settings}>
                {quotes.map((quote) => (
                  <div
                    className={`${classes.testimonial__item}`}
                    key={quote.id}
                  >
                    <div className={`${classes.testimonial__client}`}>
                      <div>
                        <Image
                          alt="client-img"
                          src="/images/avatar.jpg"
                          width="50"
                          height="50"
                          className=" rounded-2"
                        />

                        <h6 className="font-bold text-[#ff6dcd] pt-4">
                          Autor: {quote.author}
                        </h6>
                        <p className="text-2xl font-bold my-4">{quote.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-[#222] sm:pt-5">
              <SectionSubtitle subtitle="Why RandomQuotes API" />
              <p className="italic">
                I chose to use the Random Quotes API for my web app because it
                provides a simple and easy-to-use API for generating random
                quotes. The API is free to use and requires no authentication,
                making it accessible for developers of all skill levels. In my
                web app, I made an API call to the Random Quotes API to retrieve
                a random quote, which I then displayed in the UI using a React
                component. The API provides a JSON response with the quote text
                and author, which I parsed and formatted using JavaScript to
                create a readable and visually appealing quote display. Overall,
                I found the Random Quotes API to be a great choice for my
                project due to its simplicity, accessibility, and the wide range
                of quotes available in its database.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;

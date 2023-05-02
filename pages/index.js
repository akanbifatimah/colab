/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";
import { Head } from "next/document";
export default function Home() {
  <Head>
  // eslint-disable-next-line @next/next/no-title-in-document-head
  <title>Fatimah Akanbi</title>
    <meta name="description" content="Front end web developer" />
  <meta property="og:title" content="Home - Fatimah Akanbi" />
  <meta property="og:description" content="Fatimah Akanbi-Front end web developer!" />
  <meta property="og:url" content="https://fatimahakanbi.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width,
   initial-scale=1.0"/>

  </Head>
  return (
    <Fragment>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Fragment>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import About from "../About/About";



import Github from "../About/Github";

import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "../About/Toolstack";
import Projects from "../Projects/Projects";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" data-aos="fade-right">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We are 
                <strong className="main-name"> Wasal Dev</strong>
              </h1>

              <h5>Innovative Solutions, Global Reach</h5>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-left">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
   

{/* /////////////////////////////////////// */}

<Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1> */}
            {/* <Aboutcard /> */}
          {/* </Col> */}
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
        <h1 className="project-heading" data-aos="fade-down">
          Popular <strong className="purple">Technologies </strong> we work on
        </h1>

        <Techstack />

        <h1 className="project-heading" data-aos="fade-down">
          <strong className="purple">Tools</strong> We use
        </h1>
        <Toolstack/>

        {/* <Github /> */}
      </Container>
    </Container>
    <Projects/>





    </section>
  );
}

export default Home;

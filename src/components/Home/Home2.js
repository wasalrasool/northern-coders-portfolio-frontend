import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              
              <b className="purple"> Who we are ? </b>
            </h1>
            <p className="home-about-body">
            Transforming ideas into digital realities across the globe. At Wasal Dev, we blend cutting-edge technology with unparalleled expertise to deliver bespoke software solutions that drive your success. Join our global network of innovators and let's create something extraordinary together
              <br />
              <br />See our projects, We deliver <b className="purple">gifts</b> to everyone working with us
            
              <br />
              <br />
              High Quality deliverables in every techhnology Stack &nbsp;
              <i>
                <b className="purple">Custom Websites, Mobile Apps, Desktop Apps </b>
                and much more{" "}
          
              </i>
              <br />
              <br />
              Contact Us at  
              <b className="purple"> solutions@northernCoders.com</b> Our expert and friendly team will guide you to transform your idea into stunning technology
              <i>
              <br />
              <br />
              
                  {/* {" "}
                  Explore our ready to get started <b className="purple">packages</b>
                <br />
                <br /> */}
                  {/* <Button
            variant="primary"
      
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
        
            &nbsp;Explore Packages
          </Button> */}
           
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar" data-aos="fade-left">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-down">
            <h1>FIND us on</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wasalrasool"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/wasalrasool"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/wasalrasool"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/wasalrasool"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

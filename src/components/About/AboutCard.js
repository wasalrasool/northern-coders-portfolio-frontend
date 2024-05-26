import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            We are a team of professional working to provide <span className="purple">custom solutions</span> to our customers 
            from <span className="purple"> all over the world.</span>
            <br />
            Currently we are expanding our boundaries to deal with all cultural clients.
            <br />
            You will receive on time projects and <span className="purple">high quality deliverables</span> working with us. Moreover we provide free <span className="purple">gifts</span> to our customers
            <br />
            <br />
            We craft and develop you vague concept into reality. Also open for  <span className="purple">B2B dealings</span>
            <br />
            <br />
            You get
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> High Quality Deliverables
            </li>
            <li className="about-activity">
              <ImPointRight /> On Time projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Free Gifts
            </li>
            <li className="about-activity">
              <ImPointRight /> Dedicated Person to handle your needs and craft ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Not just another normal software solution providers"{" "}
          </p>
          <footer className="blockquote-footer">Wasal Dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

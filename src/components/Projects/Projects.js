import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-down">
          Our Recent work <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-down">
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" data-aos="flip-left">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Enopio AI"
              description="Enopio Ai is an AI that performs better than any AI out there. It has a simple idea but unique and multiple complex apis to acheive the results. We are bound not to disclose the project since its in the development Stage."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="_blank"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="flip-right">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gersa Internet Village Company Profile"
              description="They are business solution company we built their company pages to showcase their projects."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://northerncoders-worksample0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="flip-left">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pricewards"
              description="It is a website for handling and connecting designers with custom clothing based in Africa. This project is currently in progress and will soon be live"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="_blank"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

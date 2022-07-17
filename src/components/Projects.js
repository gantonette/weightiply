import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';


export const Projects = () => {

  const [total, setTotal] = useState("");

  const [bmiTotal, setBMITotal] = useState("");

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    
  ];


  const basicCalc = () => {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var total = parseInt(firstNumber) + parseInt(secondNumber);
    setTotal(total.toString());
    
  }

  const bmiCalc = () => {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var bmiTotal = parseInt(secondNumber) / (parseInt(firstNumber * firstNumber));
    setBMITotal(bmiTotal.toString());
    
  }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Calculators</h2>
                <p>Select the calculator type and simply input your details then press calculate!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BMI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">TDEE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Ideal Weight</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* BMI calc */}
                    <Tab.Pane eventKey="first">
                    <div className="basicCalc">
                        <div className="display">
                            <h1>BMI Calculator</h1>
                            <span>Height: </span>
                            <input type="text" id="firstNumber"></input>
                            <br/>
                            <span>Weight: </span>
                            <input type="text" id="secondNumber"></input>
                            <br/>
                            <div className="totalDisplay">
                            { bmiTotal || "0" } 
                            </div>
                            
                            <br/>
                            <div className="calcButton">
                              <button onClick={bmiCalc}>Calculate</button>
                            </div>
                        </div>
                     </div>
                    </Tab.Pane>
                    {/* TDEE Calc */}
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <div className="basicCalc">
                        <div className="display">
                            <h1>Addition of two numbers</h1>
                            <span>Enter First Number: </span>
                            <input type="text" id="firstNumber"></input>
                            <br/>
                            <span>Enter Second Number: </span>
                            <input type="text" id="secondNumber"></input>
                            <br/>
                            <div className="totalDisplay">
                            { total || "0" } 
                            </div>
                            
                            <br/>
                            <div className="calcButton">
                              <button onClick={basicCalc}>Calculate</button>
                            </div>
                        </div>
                     </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <div className="basicCalc">
                        <div className="display">
                            <h1>Addition of two numbers</h1>
                            <span>Enter First Number: </span>
                            <input type="text" id="firstNumber"></input>
                            <br/>
                            <span>Enter Second Number: </span>
                            <input type="text" id="secondNumber"></input>
                            <br/>
                            <div className="totalDisplay">
                            { total || "0" } 
                            </div>
                            
                            <br/>
                            <div className="calcButton">
                              <button onClick={basicCalc}>Calculate</button>
                            </div>
                        </div>
                     </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

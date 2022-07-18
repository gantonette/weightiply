import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';
import skinny from '../assets/img/skinny.png';
import normal from '../assets/img/normal.png';
import bigger from '../assets/img/bigger.png';



export const Calculators = () => {
    const [total, setTotal] = useState("");

  // state (BMI)
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // state (BMR)
  const [bmr, setBmr] = useState(0);
  const [age, setAge] = useState(0);
  
  // show image based on bmi calculation
  let imgSrc = '';

  if (bmi < 18.5) {
    imgSrc = skinny;
  } else {
    if (bmi >= 18.5 && bmi <= 24.9) {
      imgSrc = normal;
    } else{
      imgSrc = bigger;
    }
  }

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      setMessage('Please enter your weight and height');
      
    } else {
      let bmi = (weight / (height * height));
      setBmi(bmi.toFixed(2));

      // Logic for message
      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.6 && bmi < 25) {
        setMessage('You are at a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  }

  // bmr calculation
  let calcBmr = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      setMessage('Please enter your weight and height');
      
    } else {
      let bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
      setBmr(bmr.toFixed(2));

    }
  }

  let reload = () => {
    window.location.reload();
  }

  
  const basicCalc = () => {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var total = parseInt(firstNumber) + parseInt(secondNumber);
    setTotal(total.toString());
    
  }

    return (
    <section className="calculator" id="calculator">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Calculators</h2>
                <p>Select the calculator type and simply input your details then press calculate!</p>
                <Tab.Container id="calculator-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BMI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">TDEE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">BMR</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        
        {/* BMI calc */}
        <Tab.Pane eventKey="first">
      <div className="content-container">
        <div className="row">
            <div className="left-panel box">
                <div className="bmi-container">
                <h2 className='bmiCalcCenter'>BMI Calculator</h2>
                <form onSubmit={calcBmi}>
                <div>
                    <label> Weight (kgs)</label>
                    <input value={weight} onChange={(event) => setWeight(event.target.value)} />
                </div>
                <div>
                    <label>Height (meters)</label>
                    <input value={height} onChange={(event) => setHeight(event.target.value)} />
                </div>
                <div>
                    <button className='btn' type='submit'>Submit</button>
                    <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
                </div>
                </form>

                <div className='center'>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
                </div>
            </div>
            </div>

            <div className="middle-panel box">
                <h2> Body Mass Index (BMI) </h2>
                <h4>
                The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status 
                while taking age into consideration. Use the "Metric Units" tab for the International System of Units or the 
                "Other Units" tab to convert units into either US or metric units.
                </h4>
                
            </div>
            
            <div className="right-panel box">
                <h4> BMI = {bmi}kg/m2 </h4>
                <h3> {message} </h3>
                <div className="bmiImg">
                    <img src={imgSrc} alt="bmi" />
                </div>

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

        {/* BMR calc */}
      <Tab.Pane eventKey="third">
      <div className="content-container">
        <div className="row">
            <div className="left-panel box">
                <div className="bmr-container">
                <h2 className='bmrCalcCenter'>BMR Calculator</h2>
                <form onSubmit={calcBmr}>
                <div>
                    <label> Weight (kgs)</label>
                    <input value={weight} onChange={(event) => setWeight(event.target.value)} />
                </div>
                <div>
                    <label>Height (meters)</label>
                    <input value={height} onChange={(event) => setHeight(event.target.value)} />
                </div>
                <div>
                    <label>Age (years)</label>
                    <input value={age} onChange={(event) => setAge(event.target.value)} />
                </div>
                <div>
                    <button className='btn' type='submit'>Submit</button>
                    <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
                </div>
                </form>

                <div className='center'>
                <h3>Your BMR is: {bmr}</h3>
                <p>{message}</p>
                </div>
            </div>
            </div>

            <div className="middle-panel box">
                <h2> Basal Metabolic Rate (BMR) </h2>
                <h4>
                The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, 
                and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).
                </h4>
                
            </div>
            
            <div className="right-panel box">
                <h5> With a BMR of {bmr}, you will require {bmr} calories just for your body to survive. 
                Consuming less than or equal to {bmr} calories will ensure weight loss.  </h5>
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
    </section>
  )

}
import React from "react";
import {Row, Col, Button, Input} from 'react-materialize';
import "./Homepage.css";

const Homepage = ({
    getInput,
    getResults,
    foodInput,
    foodPairing,
    winePairing,
    winePairingImage
  }) => {

  return ( 
    <div className="HomepageComponent">
      <Row className="container foodInput">
        <div>
        <form >
        <Col s={8}>
        <Input onChange={e => getInput(e.target.value)} s={12} name="food" className="food" type="text" value={foodInput} 
         label="Enter a food and find a wine" />
        </Col>
        <Col className="submitButton" s={4}>
        <Button onClick={e => getResults( e.preventDefault())}  onKeyPress={e => getResults( e.preventDefault())} s={12} waves='light'  type="submit"  value="submit">Get to   Sippin</Button>
        </Col>
        </form>
        </div>
      </Row>
      <Row className="container">
      <Row>
        <Col s={12} className="foodPairing">
          {winePairing}
        </Col>
        </Row>
        <Row>
        <Col s={12} className="winePairingImage">
        <img src={winePairingImage} />
        </Col>
        </Row>
        <Col s={12} className="foodPairing">
          {foodPairing}
        </Col>
         </Row> 
      
    </div>
  
)
};

export default Homepage;


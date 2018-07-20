import React from "react";
import {Row, Col, Button, Input} from 'react-materialize'
import "./Homepage.css";

const Homepage = ({ getInput }) => {
  console.log(getInput);

  return (  
    <div>
      <Row className="container foodInput">
        <div>
        <form >
        <Col s={8}>
        <Input onChange={e => getInput(e.target.value)} s={12} name="food" className="food" type="text" label="Enter a food and find a wine" />
        </Col>
        <Col className="submitButton" s={4}>
        <Button  onClick={(e) => {
      e.preventDefault()
      getInput("hi")}} s={12} waves='light'  type="submit"  value="submit">Get to   Sippin</Button>
        </Col>
        </form>
        </div>
      </Row>
    </div>
)
};

export default Homepage;
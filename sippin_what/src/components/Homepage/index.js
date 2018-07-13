import React from "react";
import {Row, Col, Input} from 'react-materialize'
import "./Homepage.css"

const Homepage = props => ( 
  <div>
<Row>
  <Col s={12}> <img src="https://images.pexels.com/photos/162784/wine-alk-alcohol-white-wine-162784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="starterImage" alt="start"/></Col>
  </Row>

  <Row center>
  <Col s={2}></Col>
  <Col s={8}><Input s={12} className="center" /></Col>
  <Col s={2}></Col>
  </Row>
  </div>
);

export default Homepage;
import React from "react";
import {Row, Col, Button, Input, Icon} from 'react-materialize'
import "./Homepage.css";

const Homepage = props => ( 
  <div>
  <Row className="container foodInput">
    <Col s={8}>
    <Input s={12} className="food" label="Please Enter a Food" />
    </Col>
    <Col className="submitButton" s={4}>
    <Button  s={12} waves='light' type="submit"><Icon left>send</Icon>Submit</Button>
    </Col>
  </Row>


 
  {/* <div className="section white ">
    <div className="row container">
      <Row>
   
    <Input s={12} label="Please Enter a Food" />
</Row>
<Row>
    <Input name='group1' type='radio' value='red' label='Red' />
    <Input name='group1' type='radio' value='yellow' label='Yellow' />
    <Input name='group1' type='radio' value='green' label='Green' className='with-gap' />
    <Input name='group1' type='radio' value='brown' label='Brown' disabled='disabled' />
</Row>
< Row >
<Col s={6}>
<div>Select a Price Range</div>
  <form action="#">
    <p class="range-field">
      <input type="range" id="test5" min="10" max="100" />
    </p>
  </form>
  </Col>
  </ Row>

    </div>
  </div> */}
  </div>
);


export default Homepage;
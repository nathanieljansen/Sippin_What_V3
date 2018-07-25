import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';
import './WinePairings.css';

const WinePairings = () => {

return(
  <div>
      <Row className = "container winePairing">
       <Col l={3} m={6} s={12} >
        <Card className="card" header={<CardTitle waves='light'/>}
            title="Carol"
            reveal={<p>Carol is a driven professional who has spent most of her career in the non-profit world. She has a demonstrated history of building strong relationships with staff, clients and donors, managing projects and developing social media and marketing strategies. When not working she can be found enjoying the outdoors, coding, and wine (of course).</p>}>
            <p><a href="https://www.linkedin.com/in/carol-g-0a9b15b4/" rel="noopener noreferrer" target="_blank">Connect with Carol</a></p>
        </Card>
       </Col>
       <Col l={3} m={6} s={12} >
        <Card className="card" header={<CardTitle  waves='light'/>}
            title="Carol"
            reveal={<p>Carol is a driven professional who has spent most of her career in the non-profit world. She has a demonstrated history of building strong relationships with staff, clients and donors, managing projects and developing social media and marketing strategies. When not working she can be found enjoying the outdoors, coding, and wine (of course).</p>}>
            <p><a href="https://www.linkedin.com/in/carol-g-0a9b15b4/" rel="noopener noreferrer" target="_blank">Connect with Carol</a></p>
        </Card>
       </Col>
       <Col l={3} m={6} s={12} >
        <Card className="card" header={<CardTitle waves='light'/>}
            title="Carol"
            reveal={<p>Carol is a driven professional who has spent most of her career in the non-profit world. She has a demonstrated history of building strong relationships with staff, clients and donors, managing projects and developing social media and marketing strategies. When not working she can be found enjoying the outdoors, coding, and wine (of course).</p>}>
            <p><a href="https://www.linkedin.com/in/carol-g-0a9b15b4/" rel="noopener noreferrer" target="_blank">Connect with Carol</a></p>
        </Card>
       </Col>
       <Col l={3} m={6} s={12} >
        <Card className="card" header={<CardTitle  waves='light'/>}
            title="Carol"
            reveal={<p>Carol is a driven professional who has spent most of her career in the non-profit world. She has a demonstrated history of building strong relationships with staff, clients and donors, managing projects and developing social media and marketing strategies. When not working she can be found enjoying the outdoors, coding, and wine (of course).</p>}>
            <p><a href="https://www.linkedin.com/in/carol-g-0a9b15b4/" rel="noopener noreferrer" target="_blank">Connect with Carol</a></p>
        </Card>
       </Col>
      </Row>
      </div>
)
};


export default WinePairings;

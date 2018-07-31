import React from 'react';
import {Row, Col} from 'react-materialize';
import './WinePairings.css';

const WinePairings = ({
    foodPairing,
    winePairing,
    winePairingImage
}) => {

return(
  <div>
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


export default WinePairings;

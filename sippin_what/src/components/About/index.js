import React from "react";
import {Row, Col, Card, CardTitle} from 'react-materialize'
import "./About.css";
import carol from "./images/carol.jpg";
import david from "./images/david.jpg";
import pritha from "./images/pritha.jpg";
import nate from "./images/nate.jpg";

//super means start up the library


class About extends React.Component {
render() {
    return(
    <div>
        <Row>
            <Col s={12}><h3>The Sippin What Team</h3></Col>
        </Row>
     <div>
    <Row>
        <Col s={2}></Col>
        <Col s={3}>
            <Card id="card" header={<CardTitle image={carol} waves='light'/>}
            title="Carol"
            reveal={<p>Carol is a driven professional who has spent most of her career in the non-profit world. She has a demonstrated history of building strong relationships with staff, clients and donors, managing projects and developing social media and marketing strategies. When not working she can be found enjoying the outdoors, coding, and wine (of course).</p>}>
            <p><a href="https://www.linkedin.com/in/carol-g-0a9b15b4/">Connect with Carol</a></p>
        </Card>
        </Col>
        <Col s={2}></Col>
        <Col s={3}>
            <Card id="card" header={<CardTitle image={david} waves='light'/>}
            title="David"
            reveal={<p>David is an experienced Technical Account Manager and Technical Support Engineer in the television broadcast industry. Currently studying HTML5, Javascript, JQuery, and Node, at the University of Denver, David is gaining knowledge of fullstack web development, including interacting with APIs, JSON messaging and backend database querying.What? It's only been two months?</p>}>
            <p><a href="https://www.linkedin.com/in/davem/">Connect with David</a></p>
        </Card>
        </Col>
        <Col s={2}></Col>
    </Row>    
    < Row>
        <Col s={2}></Col>
       <Col s={3}>
            <Card id="card" header={<CardTitle image={pritha} waves='light'/>}
            title="Pritha"
            reveal={<p>Pritha is an experienced Software Test Engineer with a demonstrated history of working in the finance and health wellness and fitness industry. She is a quality assurance professional and a graduate from Columbia College. Besides work, she is learning how to ski and love to travel to new places to explore different culture and try new food.</p>}>
            <p><a href="https://www.linkedin.com/in/pritha-mishra/">Connect with Pritha</a></p>
        </Card>
        </Col>
           <Col s={2}></Col>
        <Col s={3}>
            <Card id="card" header={<CardTitle image={nate} waves='light'/>}
            title="Nate"
            reveal={<p>Nathaniel has a strong background in process management and development. His past knowledge in technology and business managment has driven him to excel in his field.Nathaniel loves writing code and is motivated to develop web applications that are bug free and sophisticated.Besides his passion about writing code Nate enjoys the occasional drink.So, Sip This to support him and the rest of the team - Cheers!</p>}>
            <p><a href="https://www.linkedin.com/in/nathanieljansen/">Connect with Nate</a></p>
        </Card>
        </Col> 
         <Col s={2}></Col>
    </Row>
    </div>
  </div>
            )
        }
    }

export default About;



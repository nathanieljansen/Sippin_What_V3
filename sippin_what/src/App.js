import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import About from "./components/About";
import ContactFormContainer from "./components/ContactForm/ContactFormContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {   





class App extends Component {
  
  render() {
    return (
      
     <div>
      <HeaderContainer />
      < Router >
        <Switch>
            < Route path="//" component={HomepageContainer} />
            < Route path="/about" component={About} />
            < Route path="/contact" component={ContactFormContainer} />
        </Switch>
        </Router>
        <FooterContainer />
        </div>
        
     
    )
  } 
}

export default App;
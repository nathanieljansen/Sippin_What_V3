import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import About from "./components/About";
import ContactFormContainer from "./components/ContactForm/ContactFormContainer";
import LoginContainer from "./components/Login/LoginContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";



class App extends Component {

  render() {
    return (
      <div>
         <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
        </div>,
     <div>
      <HeaderContainer />
      < Router >
        <Switch>
            < Route exact path="/" component={HomepageContainer} />
            < Route exact path="/about" component={About} />
            < Route exact path="/contact" component={ContactFormContainer} />
             < Route exact path = "/login"
             component = {
               LoginContainer
             }
             />
             < Route exact path = "/signup"
             component = {
               SignUpContainer
             }
             />
        </Switch>
        </Router>
        <FooterContainer />
        </div>
        
     
    )
  } 
}

export default App;
import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import About from "./components/About";
import ContactFormContainer from "./components/ContactForm/ContactFormContainer";
import LoginContainer from "./components/Login/LoginContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import WinePairingContainer from "./components/WinePairings/WinePairingContainer"


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
            < Route path="//" component={HomepageContainer} />
            < Route path="/about" component={About} />
            < Route path="/contact" component={ContactFormContainer} />
             < Route path = "/login"
             component = {
               LoginContainer
             }
             />
             < Route path = "/signup"
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
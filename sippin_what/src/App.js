import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer"
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer"
import About from "./components/About";
import ContactFormContainer from "./components/ContactForm/ContactFormContainer"
class App extends Component {   

  render() {
 

    return (
      <div>
        <HeaderContainer />
        <HomepageContainer />
        <FooterContainer />
        <About />
        < ContactFormContainer / >
      </div>
    )
  }
}

export default App;

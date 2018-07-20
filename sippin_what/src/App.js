import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer"
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer"
import About from "./components/About";

class App extends Component {   
// import logo from './logo.svg';

// import Homepage from "./components/Homepage";


  render() {
    return (
      <div>
        <HeaderContainer />
        <HomepageContainer />
        <FooterContainer />
        <About />
      </div>
    )
  }
}

export default App;

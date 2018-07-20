import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer"
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer"

export default class App extends Component {   

  render() {
    return (
      <div>
        <HeaderContainer />
        <HomepageContainer />
        <FooterContainer />
      </div>
    )
  }
}
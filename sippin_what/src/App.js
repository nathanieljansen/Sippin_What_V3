import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import ContactFormContainer from "./components/ContactForm/ContactFormContainer"
//
class App extends Component {
  constructor(props) {
    super(props);

    // 
  }



  render() {
    // const {
    //   shouldRenderContactForm,
    // } = this.state;

    return (
      <ContactFormContainer />
    );

      
      
  }
}

export default App;

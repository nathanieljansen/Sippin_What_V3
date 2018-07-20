import React from "react";
import Header from "./Header"

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal : ''
    }
  }

  render() {
    return <Header />
  };
};
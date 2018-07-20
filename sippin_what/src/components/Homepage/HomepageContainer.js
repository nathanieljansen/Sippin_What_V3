import React from "react";
import Homepage from "./Homepage"

export default class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInput : " "
    }
  }

  getInput = input => {
    console.log(input)
}

  render() {
    return <Homepage  getInput={this.getInput}/>
  };
};



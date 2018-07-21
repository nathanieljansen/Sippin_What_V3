import React from "react";
import Homepage from "./Homepage"

export default class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getLatLong()
    this.state = {
      foodInput : " "
    }
  }

  getLatLong = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }

  getInput = input => {
    console.log(input)
    this.setState({
      foodInput: input
    })
  }

  getResults = () => {
    console.log(this.state.foodInput)
  }

  render() {
    return <Homepage 
      getInput={this.getInput} 
      getResults={this.getResults} />
  };
};



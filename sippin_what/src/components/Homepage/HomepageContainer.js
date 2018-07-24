import React from "react";
import Homepage from "./Homepage"
import axios from "axios"

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
    console.log(this.state.foodInput)
  }

  getResults = () => {
    console.log(this.state.foodInput)
    console.log(" was submitted ")
      axios.get('/api/getDrunk/')
          .then(res => {
              console.log(res);
              console.log(res.data);
          })
          .catch(err =>{
              console.log(err);
          })
  }

 




  // const {
  //     name,
  //     email,
  //     message
  //     } = this.state;

      // const user = {
      //     name: name,
      //     email: email,
      //     message: message
      // };
      // const user = {
      //   name: this.state.name,
      //   email: this.state.email,
      //   message: this.state.message
      // };

      



  
  render() {
    return <Homepage 
    handleFormSubmit = {this.handleFormSubmit}
      getInput={this.getInput} 
      getResults={this.getResults} />
  };
};



import React from "react";
import Homepage from "./Homepage"
import axios from "axios"

export default class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInput : ""
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
      axios.get('/api/getDrunk?foodInput=' + this.state.foodInput)
          .then(res => {
            console.log(this.state.foodInput)
            console.log(res);
            console.log(res.data);
            this.setState({
              foodInput: ""
            })
            console.log(this.state)
          })
          .catch(err =>{
              console.log(err);
          })
  }

  render() {
    return<Homepage
    foodInput={this.state.foodInput}
    handleFormSubmit = {this.handleFormSubmit}
      getInput={this.getInput} 
      getResults={this.getResults}
      getLatLong={this.getLatLong} />
    
  };
};



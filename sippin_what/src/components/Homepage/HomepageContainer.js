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
    console.log("zip_code", localStorage.getItem("zip_code"))
      axios.get('/api/getDrunk?foodInput=' + this.state.foodInput + "&zip_code=" + localStorage.getItem("zip_code"))
          .then(res => {
            console.log(this.state.foodInput)
            console.log(res);
            console.log(res.data);
            this.setState({
              foodInput: "",
              foodPairing: res.data.pairingText,
             winePairing: res.data.productMatches[0].title,
             winePairingImage: res.data.productMatches[0].imageUrl
               })
           console.log(res.data.productMatches[0].imageUrl)
          
            console.log(this.state)
          })
          .catch(err =>{
              console.log(err);
          })
  }

  render() {
    return<Homepage
    foodPairing={this.state.foodPairing}
   winePairing={this.state.winePairing}
   winePairingImage={this.state.winePairingImage}
    foodInput={this.state.foodInput}
    handleFormSubmit = {this.handleFormSubmit}
      getInput={this.getInput} 
      getResults={this.getResults}
      getLatLong={this.getLatLong} />
    
  };
};



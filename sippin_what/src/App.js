import React, { Component } from 'react';
import HeaderContainer from "./components/Header/HeaderContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import About from "./components/About";
// import Homepage from '.components/Homepage';
// import ContactForm from './components/ContactForm';
import ContactFormContainer from "./components/ContactForm/ContactFormContainer";
import { BrowserRouter as Switch, Route } from "react-router-dom";
class App extends Component {   

  render() {
    return (
     
     
        <Switch>
          <div>
            < Route path="/home" component={HomepageContainer} />
            < Route path="/about" component={About} />
            < Route path="/contact" component={ContactFormContainer} />
            </div>
        </Switch>
        
     
    )
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from './pages/home.js';
// import Aboutpage from './pages/about.js';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route path="/home" component={HomePage} />
//           <Route path="/about" component={Aboutpage} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

//  <HeaderContainer />
//             <HomepageContainer />
//             <FooterContainer />
//             <About />
//             <ContactFormContainer />

// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from './home.js';
// // import images from "./images"
// import About from "./components/about"

// class App extends Component {
//   render() {
//     return (
//      <About></About>
//     );
//   }
// }

// export default App;
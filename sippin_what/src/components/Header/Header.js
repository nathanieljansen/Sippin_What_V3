import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./Header.css";
<head>
         <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"/>
       </head> 

const Header = props => (

<div>
<Navbar className="navBar" brand='Sippin What' href='/'right>
  <NavItem href='/about'>Meet the Team</NavItem>
  <NavItem href='/contact'>Contact Us</NavItem>
  <NavItem href='/login'>Login</NavItem>
</Navbar>

</div>
)

export default Header;
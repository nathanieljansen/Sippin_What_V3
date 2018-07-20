import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./Header.css";

const Header = props => (
<div>
<Navbar className="navBar" brand='Sippin What' right>
  <NavItem href='get-started.html'>Meet the Team</NavItem>
  <NavItem href='components.html'>Contact Us</NavItem>
  <NavItem href='components.html'>Login</NavItem>
</Navbar>

</div>
)

export default Header;
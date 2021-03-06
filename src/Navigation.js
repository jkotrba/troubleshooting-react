import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return ( 
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href=""><Link to="/">WhereToGo</Link></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1}>Countries</NavItem>
                <NavItem eventKey={2}><Link to="/Highest-Rated">Highest Rated</Link></NavItem>
                <NavItem eventKey={3}>Most Visited</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#"><Link to="/LogIn">Log In</Link></NavItem>
                <NavItem eventKey={2} href="#">Sign Up</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

  export default Navigation;
  
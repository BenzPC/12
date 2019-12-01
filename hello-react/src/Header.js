import React, { Component } from "react";
import logo from './img/iconhire.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends Component {
  constructor() {
    super();
    this.state = { 
      isOpen: false
    };
    this.changeMessage=this.changeMessage.bind(this);
  }
  changeMessage() {
    if(this.state.isOpen == true){
      this.setState({ isOpen: false });
    }else{
      this.setState({ isOpen: true });
    }
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="container">
          <NavbarBrand href="/"><img src={logo} width="25px" height="25px"/></NavbarBrand>
          <NavbarToggler  onClick={this.changeMessage} />
          <Collapse isOpen={this.state.isOpen}  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">หน้าแรก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;


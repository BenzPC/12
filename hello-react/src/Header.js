import React, { Component } from "react";
import logo from "./img/iconhire.png";
import caretdown from "./img/caret-down.png";
import caretdownC from "./img/caret-downC.png";
import caretup from "./img/caret-up.png";
import caretupC from "./img/caret-upC.png";

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // isOpen: false
      NameIconCaret : caretdown ,
      NameClassDD : "dd_menu_PC"
    };
    // this.changeMessage = this.changeMessage.bind(this);
    this.NBmenuRdd = this.NBmenuRdd.bind(this);

  }

  // changeMessage() {
  //   if (this.state.isOpen == true) {
  //     this.setState({ isOpen: false });
  //   } else {
  //     this.setState({ isOpen: true });
  //   }
  // }
  
  NBmenuRdd() {
   
    if(this.state.NameClassDD == "dd_menu_PC"){
        var NameClassDD = "dd_menu_PC show";
        var IconCaret = caretdownC;
    }else{
      var NameClassDD = "dd_menu_PC";
      var IconCaret = caretdown;
    }
    this.setState({ NameClassDD : NameClassDD });
    this.setState({ NameIconCaret: IconCaret });
  }

  
  render() {
    return (
      <div>
        {/* <Navbar color="light" light expand="md">
          <Nav className="container">
            <NavbarBrand href="/">
              <img src={logo} width="25px" height="25px" />
            </NavbarBrand>
            <NavbarToggler onClick={this.changeMessage} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Nav>
        </Navbar> */}
        <div className="navbar_PC">
          <div className="container_PC">
            <div className="NBmenuL_PC">
              <a href="#" title="หน้าแรก">
                <img src={logo} width="25px" height="25px" />
              </a>
            </div>
            <div className="NBmenuR_PC">
              <div className="NBmenuR_item_PC">
                <a href="#" title="หน้าแรก">
                  หน้าแรก 
                </a>
              </div>
              <div className="NBmenuR_item_PC">
                <a href="#" title="GitHub">
                  กิตฮับ
                </a>
              </div>
              <div className="NBmenuRdd_PC NBmenuR_item_PC" onClick={this.NBmenuRdd}>
                <a href="#" title="ตั้งค่า">
                  <img src={this.state.NameIconCaret} width="15px" height="15px" />
                </a>
                <div className="dd_menu_PC1">
                  <div className={this.state.NameClassDD} >
                    <img src={caretupC} className="dd_ImgMenu_PC" />
                    <button className="dd_item_PC" type="button">
                      Action
                    </button>
                    <button className="dd_item_PC" type="button">
                      Another action
                    </button>
                    <button className="dd_item_PC" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

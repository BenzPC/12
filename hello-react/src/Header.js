import React, { Component } from "react";
import logo from "./img/iconhire.png";
import caretdown from "./img/caret-down.png";
import caretdownC from "./img/caret-downC.png";
import caretupC from "./img/caret-upC.png";
import caretup from "./img/caret-up.png";
import mainLogo from'./img/caret-up.png';
const market10 = require('./img/caret-up.png');


// import Gallery from "./imgg/";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // isOpen: false
      NameIconCaret : caretdown ,
      NameClassDD : "dd_menu_PC",
      NameClassDD1 : "open"
     // Nameimg : img close || e.target.hasClass('.dd_menu_PC')
    };
    // this.changeMessage = this.changeMessage.bind(this);
    this.NBmenuRdd = this.NBmenuRdd.bind(this);

    document.addEventListener('click', (e) => {
      if (e.target.closest('.dd_menu_PC') ){
      }else{
        if (e.target.closest('.NBmenuRdd_PC') ){
        }else{
          if(this.state.NameClassDD1 == "close"){
              this.setState({ NameClassDD : "dd_menu_PC" });
              this.setState({ NameIconCaret: caretdown });
              this.setState({ NameClassDD1 : "open" });
            }
        }
      }
    });
  }

  NBmenuRdd() {
    if(this.state.NameClassDD1 == "open"){
        var NameClassDD = "dd_menu_PC show";
        var IconCaret = caretdownC;
        this.setState({ NameClassDD1 : "close" });
    }else {
      var NameClassDD = "dd_menu_PC";
      var IconCaret = caretdown;
      this.setState({ NameClassDD1 : "open" });
    }
    this.setState({ NameClassDD : NameClassDD });
    this.setState({ NameIconCaret: IconCaret });
  }


  
  render() {
    return (
      <div>
        
        <div className="navbar_PC">
          <div className="container_PC">
            <div className="NBmenuL_PC">
              <a href="#" title="หน้าแรก">
                <img src={logo} width="25px" height="25px" />
                {/* <img src={imgs+"/caret-downC.png"} width="25px" height="25px" /> */}

              </a>
            </div>
            <div className="NBmenuR_PC">
              <div className="NBmenuR_item_PC">
                <a href="#" title="หน้าแรก">
                  หน้าแรก 
                </a>
              </div>
              <div className="NBmenuR_item_PC">
                <a href="https://github.com/BenzPC" target="_blank" title="GitHub">
                  กิตฮับ
                </a>
              </div>
              <div className="NBmenuRdd_PC NBmenuR_item_PC" >
                <span title="ตั้งค่า" onClick={this.NBmenuRdd}>
                  <img src={this.state.NameIconCaret} width="15px" height="15px" />
                </span>
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

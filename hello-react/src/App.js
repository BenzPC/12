import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      message: "Like",
      type: ""
    };
    this.changeMessage=this.changeMessage.bind(this);
    this.insertData=this.insertData.bind(this);

  }

  changeMessage() {
    //alert(this.state.message);
    if(this.state.message == "unlike"){
      this.setState({ message: "Like" });
    }else{
      this.setState({ message: "unlike" });
    }

  }

  insertData(){
    var item="React";
    var myArray=this.state.data;
    myArray.push(item);
    this.setState({ data: myArray });
  }

  onChange(event){
    this.setState({type:event.target.value})
  }

  render() {
    return (
      <div>
        2132132sss
        <button onClick={this.changeMessage}>{this.state.message}</button>
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;

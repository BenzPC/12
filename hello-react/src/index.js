import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import browserHistory from "react-router/lib/browserHistory";
import { Router, Route, Link } from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//   <Router history={browserHistory}>
//       <Route path="/" component={App} />
//       <Route path="/Header" component={Header} />
//       <Route path="/Content" component={Content} />
//       <Route path="/Footer" component={Footer} />
//   </Router>,
//   document.getElementById('root')
// );
ReactDOM.render(<Header />, document.getElementById("head"));
//  ReactDOM.render(<App />, document.getElementById("root"));
//  ReactDOM.render(<App />, document.getElementById("root1"));

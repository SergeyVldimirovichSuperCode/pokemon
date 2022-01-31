import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppHeader from "./components/app-header";

export default class Index extends Component{
  render(){
    return(
      <div className="main">
        <AppHeader/>
        <App />
      </div>
     
    );
  }
}
ReactDOM.render(<Index/>,document.getElementById("root"));



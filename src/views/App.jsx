import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../css/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">Hello Buzz!</p>
      </div>
    );
  }
}

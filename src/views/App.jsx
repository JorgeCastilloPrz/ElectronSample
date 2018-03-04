import React, {Component} from "react";
import logo from "../assets/logo.svg";
import "../css/App.css";
import MapView from "./MapView.jsx"

export default class App extends Component {
  render() {
    return (<div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Random Map React component using <a href="https://github.com/istarkov/google-map-react">google-map-react</a> from
          <p>
            <a href="https://github.com/istarkov">@istarkov</a>
          </p>
        </h2>
      </div>
      <div style={{
          width: '100%',
          height: '70vh'
        }}>
        <MapView/>
      </div>
    </div>);
  }
}

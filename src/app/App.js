import React, { Component } from "react";
import "./App.css";
import Dashboard from "../dashboard/Dashboard";
import { Image } from "semantic-ui-react";
import ExactLogo from "../resources/exact-logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <Image src={ExactLogo} />
          </div>
          <div className="team-name">!Robots</div>
          <div className="team-idea">
            Real-time support<sup>2</sup>
          </div>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;

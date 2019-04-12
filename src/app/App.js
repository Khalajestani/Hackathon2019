import React, { Component } from "react";
import "./App.css";
import Dashboard from "../dashboard/Dashboard";
import { Image, Input } from "semantic-ui-react";
import ExactLogo from "../resources/exact-logo.png";
import SearchIcon from "../resources/search-icon.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <Image src={ExactLogo} verticalAlign="middle" />
          </div>
          <div className="customer">
            <div>
              <div class="label">Calling with</div>
              <div class="customer-name">Phill Robinson</div>
            </div>
            <div className="emoji">🤠</div>
          </div>
          <div className="team">
            <div className="search">
              <Image src={SearchIcon} className="search-icon" />
              <Input placeholder="Search..." />
            </div>
            Real-time support<sup>2</sup> <span>//</span> !Robots
          </div>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Dashboard from "../dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">We are !Robots</header>
        <Dashboard />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Dashboard from "../dashboard/Dashboard";
import { Image, Icon } from "semantic-ui-react";
import ExactLogo from "../resources/exact-logo.png";

import StartConversation from "../conversation/StartConversationAPI.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      callButtonClass: "callButton"
    };

    this.answerCall = this.answerCall.bind(this);
  }

  answerCall() {
    if (this.state.callButtonClass === "endCallButton") {
      StartConversation();
      this.setState({ callButtonClass: "callButton" });
    } else {
      this.setState({ callButtonClass: "endCallButton" });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <Image src={ExactLogo} verticalAlign="middle" />
          </div>
          <div className="customer">
            <div>
              <div className="label">Calling with</div>
              <div className="customer-name">Phill Robinson</div>
            </div>
            <div className="emoji">🤠</div>
          </div>
          <div className={this.state.callButtonClass} onClick={this.answerCall}>
            <Icon name="call" size="big" />
          </div>
          <div className="team">
            Real-time support<sup>2</sup> <span>//</span> !Robots
          </div>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;

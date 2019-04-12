import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class ChatNode extends Component {
  debugger;
  render() {
    const cssClassBubble =
      this.props.result.From === "Customer"
        ? "bubble customer"
        : "bubble support";
    const cssClassArrow =
      this.props.result.From === "Customer"
        ? "bubble-arrow customer"
        : "bubble-arrow support";

    return (
      <div className={cssClassBubble}>
        <p className="name">{this.props.result.Name}</p>
        <div className="txt">
          <span className="message">{this.props.result.Text}</span>
          <span className="timestamp">{this.props.result.Timestamp}</span>
        </div>
        <div className={cssClassArrow} />
      </div>
    );
  }
}

export default ChatNode;

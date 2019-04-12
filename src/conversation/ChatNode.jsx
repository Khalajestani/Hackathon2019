import React, { Component } from "react";

class ChatNode extends Component {
  render() {
    const cssClassBubble =
      this.props.result.caller === "Customer"
        ? "bubble customer"
        : "bubble support";
    const cssClassArrow =
      this.props.result.caller === "Customer"
        ? "bubble-arrow customer"
        : "bubble-arrow support";

    return (
      <div className={cssClassBubble}>
        <p className="name">{this.props.result.data.Name}</p>
        <div className="txt">
          <span className="message">{this.props.result.data.Text}</span>
          <span className="timestamp">{this.props.result.data.Timestamp}</span>
        </div>
        <div className={cssClassArrow} />
      </div>
    );
  }
}

export default ChatNode;

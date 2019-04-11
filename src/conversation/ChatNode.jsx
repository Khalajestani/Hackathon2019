import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class ChatNode extends Component {
  debugger;
  render() {
    const cssClassBubble =
      this.props.result.From === "Customer" ? "bubble" : "bubble alt";
    const cssClassArrow =
      this.props.result.From === "Customer"
        ? "bubble-arrow"
        : "bubble-arrow alt";

    return (
      <Segment>
        <div className={cssClassBubble}>
          <div className="txt">
            <p className="name">{this.props.result.Name}</p>
            <p className="message">{this.props.result.Text}</p>
            <span className="timestamp">{this.props.result.Timestamp}</span>
          </div>
          <div className={cssClassArrow} />
        </div>
      </Segment>
    );
  }
}

export default ChatNode;

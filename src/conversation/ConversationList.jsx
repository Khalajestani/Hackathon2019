import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import MockConversation from "./GetConversationText.js";
import ConversationText from "./ConversationTextAPI.js";
import "./Conversation.css";

const ChatNode = props => {
  const cssClassBubble =
    props.result.From === "Customer" ? "bubble" : "bubble alt";
  const cssClassArrow =
    props.result.From === "Customer" ? "bubble-arrow" : "bubble-arrow alt";

  return (
    <Segment>
      <div className={cssClassBubble}>
        <div className="txt">
          <p className="name">{props.result.Name}</p>
          <p className="message">{props.result.Text}</p>
          <span className="timestamp">{props.result.Timestamp}</span>
        </div>
        <div className={cssClassArrow} />
      </div>
    </Segment>
  );
};

const ConversationTextList = props => {
  return props.list.map((result, index) => (
    <ChatNode key={index} result={result} />
  ));
};

class ConversationList extends Component {
  textList = () => {
    ConversationText()
      .then(Response => {
        return ConversationTextList(Response);
      })
      .catch(response => {
        console.log("failed to get ConversationList - " + response);
      });
    return null;
  };

  render() {
    return (
      <div className="speech-wrapper">
        <ConversationTextList list={MockConversation} />
      </div>
    );
  }
}

export default ConversationList;

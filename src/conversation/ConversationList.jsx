import React, { Component } from "react";
import ChatNode from "./ChatNode";
import "./Conversation.css";

import MockConversation from "./GetConversationText.js";

const ConvList = [];

const UpdateConvList = dataList => {
  dataList.forEach(element => {
    ConvList.push(element);
  });

  return ConvList;
};

const RenderList = props => {
  const conversation = props.list;

  return conversation.map((result, index) => (
    <ChatNode key={index} result={result} />
  ));
};

class ConversationList extends Component {
  constructor() {
    super();
    this.state = {
      convList: []
    };

    // this.ClickMethod = this.ClickMethod.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.convList);
      this.func();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  func() {
    console.log("iterated");
    UpdateConvList(MockConversation);
    this.setState({ convList: <RenderList list={ConvList} /> });
  }

  render() {
    return (
      <div className="speech-wrapper" onClick={this.ClickMethod}>
        {this.state.convList}
      </div>
    );
  }
}

export default ConversationList;

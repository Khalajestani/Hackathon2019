import React, { Component } from "react";
import ChatNode from "./ChatNode";
import "./Conversation.css";
import GetCallerConversationText from "./GetCallerConversationAPI.js";
import GetSupportConversationText from "./GetSupportConversationAPI";

const ConvList = [];

const UpdateConvList = (dataList, caller) => {
  if (dataList.data === undefined || dataList.data.length === 0) {
    return ConvList;
  }
  dataList.data.forEach(element => {
    const record = { data: element, caller: caller };
    ConvList.push(record);
  });

  return ConvList;
};

const RenderList = props => {
  const conversation = props.list;

  return conversation.map((result, index) => (
    <ChatNode key={index} result={result} person={props.person} />
  ));
};

class ConversationList extends Component {
  constructor() {
    super();
    this.state = {
      convList: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.func();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  func() {
    console.log("iterated");

    GetCallerConversationText()
      .then(res => {
        UpdateConvList(res, "Customer");
        this.setState({
          convList: <RenderList list={ConvList} />
        });
      })
      .catch(response => {
        console.log("failed to get caller data" + response);
      });

    GetSupportConversationText()
      .then(res => {
        UpdateConvList(res, "Support");
        this.setState({
          convList: <RenderList list={ConvList} />
        });
      })
      .catch(response => {
        console.log("failed to get support data" + response);
      });

    this.scrollToBottom();
  }

  render() {
    return (
      <div className="speech-wrapper" onClick={this.ClickMethod}>
        {this.state.convList}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
}

export default ConversationList;

import React, { Component } from "react";
import ChatNode from "./ChatNode";
import "./Conversation.css";
import StartConversation from "./StartConversationAPI.js";
import GetCallerConversationText from "./GetCallerConversationAPI.js";
import GetSupportConversationText from "./GetSupportConversationAPI";

const ConvList = [];

const UpdateConvList = dataList => {
  if (dataList.data === undefined || dataList.data.length === 0) {
    return ConvList;
  }
  dataList.data.forEach(element => {
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
    StartConversation();
    this.interval = setInterval(() => {
      this.func();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  func() {
    console.log("iterated");

    // GetCallerConversationText()
    //   .then(res => {
    //     UpdateConvList(res);
    //     this.setState({ convList: <RenderList list={ConvList} /> });
    //   })
    //   .catch(response => {
    //     console.log("failed to get caller data" + response);
    //   });

    GetSupportConversationText()
      .then(res => {
        UpdateConvList(res);
        this.setState({ convList: <RenderList list={ConvList} /> });
      })
      .catch(response => {
        console.log("failed to get support data" + response);
      });
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

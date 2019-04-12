import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import GetSearchResult from "./SearchResultsAPI.js";
import "./ResultList.css";

const ResultNode = props => {
  return (
    <Card.Content extra>
      <Card.Header>{props.result.Title}</Card.Header>
      <Card.Meta>{props.result.Category}</Card.Meta>
      <Card.Description>{props.result.Summary}</Card.Description>
      <a
        className="ui"
        href={"https://support.exactonline.com/" + props.result.HRef}
        target="_blank"
      >
        View solution
      </a>
      <a className="ui">Solved the issue</a>
    </Card.Content>
  );
};

const FoundResults = props => {
  if (props.list === undefined || props.list.length === 0) {
    return null;
  }

  return props.list.map((result, index) => (
    <ResultNode key={index} result={result} />
  ));
};

class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      searchList: []
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.searchResult();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  searchResult = () => {
    console.log("itterating search");
    GetSearchResult()
      .then(Response => {
        this.setState({
          searchList: <FoundResults list={Response} />
        });
      })
      .catch(response => {
        console.log("failed to get searchResults - " + response);
      });

    return null;
  };

  render() {
    return this.state.searchList;
  }
}

export default ResultList;

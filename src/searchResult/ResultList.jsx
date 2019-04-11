import React, { Component } from "react";
import MockResults from "./GetSearchResult.js";

const ResultNode = props => {
  return <div>{props.result.Title}</div>;
};

const FoundResults = () => {
  return MockResults.map((result, index) => (
    <ResultNode key={index} result={result} />
  ));
};

class ResultList extends Component {
  render() {
    return <FoundResults />;
  }
}

export default ResultList;

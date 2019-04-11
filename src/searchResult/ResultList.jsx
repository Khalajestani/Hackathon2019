import React, { Component } from "react";
import MockResults from "./GetSearchResult.js";
import { Card } from "semantic-ui-react";
import "./ResultList.css";

const ResultNode = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.result.Title}</Card.Header>
      </Card.Content>
    </Card>
  );
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

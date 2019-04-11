import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import MockResults from "./GetSearchResult.js";
import GetSearchResult from "./SearchResultsAPI.js";
import "./ResultList.css";

const ResultNode = props => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{props.result.Title}</Card.Header>
        <Card.Meta>{props.result.Category}</Card.Meta>
        <Card.Description>{props.result.Summary}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a
          className="ui"
          href={"https://support.exactonline.com/" + props.result.HRef}
          target="_blank"
        >
          View solution
        </a>
        <a className="ui">Solved the issue</a>
      </Card.Content>
    </Card>
  );
};

const FoundResults = props => {
  return props.list.map((result, index) => (
    <ResultNode key={index} result={result} />
  ));
};

class ResultList extends Component {
  searchResult = () => {
    GetSearchResult()
      .then(Response => {
        return FoundResults(Response);
      })
      .catch(response => {
        console.log("failed to get searchResults - " + response);
      });
    return null;
  };

  render() {
    //return <div>{this.searchResult()}</div>;
    return <FoundResults list={MockResults} />;
  }
}

export default ResultList;

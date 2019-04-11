import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ResultList from "../searchResult/ResultList";
import ConversationList from "../conversation/ConversationList.jsx";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <Grid columns="three" divided>
        <Grid.Row>
          <Grid.Column>
            <ConversationList />
          </Grid.Column>
          <Grid.Column>
            <ResultList />
          </Grid.Column>
          <Grid.Column>We Are !Robots.</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;

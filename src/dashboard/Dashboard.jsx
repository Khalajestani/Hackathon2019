import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import ResultList from "../searchResult/ResultList";
import ConversationList from "../conversation/ConversationList.jsx";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <Grid columns="three" divided>
        <Grid.Row>
          <Grid.Column>
            <h2>Conversation</h2>
            <ConversationList />
          </Grid.Column>
          <Grid.Column>
            <h2>Knowledge base</h2>
            <ResultList />
          </Grid.Column>
          <Grid.Column>
            <h2>Support cases</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import { Grid, Image, Card } from "semantic-ui-react";
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
            <div className="column-content">
              <ConversationList />
            </div>
          </Grid.Column>
          <Grid.Column>
            <h2>Knowledge base</h2>
            <div className="column-content">
              <Card fluid>
                <Card.Content>
                  <h5>Results for: "btw aangifte doen"</h5>
                </Card.Content>
                <ResultList />
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h2>Support cases</h2>
            <div className="column-content">
              <Card fluid>
                <Card.Content>
                  <h5>Results for: "btw aangifte doen"</h5>
                </Card.Content>
                <ResultList />
              </Card>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;

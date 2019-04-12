import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import ResultList from "../searchResult/ResultList";
import ConversationList from "../conversation/ConversationList.jsx";

import { GetSearchKey } from "../searchResult/SearchKey.js";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      searchKey: ""
    };

    this.func = this.func.bind(this);
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
    this.setState({ searchKey: GetSearchKey() });
  }

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
                  <h5>Results for: {this.state.searchKey}</h5>
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
                  <h5>Results for: {this.state.searchKey}</h5>
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

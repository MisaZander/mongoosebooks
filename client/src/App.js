import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Container } from "reactstrap";
import Navi from "./components/Navi";
import Welcome from "./components/Welcome";
import Search from "./components/Search";
import Savings from "./components/Savings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navi />
            <Container>
              <Welcome />
              <Switch>
                <Route exact path="/search" component={Search} />
                <Route exact path="/savings" component={Savings} />
                <Route component={Savings} />
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

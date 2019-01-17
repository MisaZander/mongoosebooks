import React, { Component } from "react";

class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: []
    };
  }

  render() {
    return <h1>Welcome to your savings</h1>;
  }
}

export default Savings;

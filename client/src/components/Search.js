import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { Container } from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    alert(this.state.search);
  };

  render() {
    let results;
    if (this.state.results.length > 0) {
      results = (
        <Container>
          <h6>There be results</h6>
        </Container>
      );
    }

    return (
      <div>
        <SearchBar
          value={this.state.search}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {results}
      </div>
    );
  }
}

export default Search;

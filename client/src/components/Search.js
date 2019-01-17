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
        <SearchBar />
        {results}
      </div>
    );
  }
}

export default Search;

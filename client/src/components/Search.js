import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Result from "./Result";
//import { Row } from "reactstrap";
import API from "../utils/API";
import isEmpty from "../utils/is-empty";

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
    API.search(this.state.search)
      .then(response => {
        const goodies = response.data.items.map(result => {
          // const { id } = result;
          // const { title, authors, description, previewLink } = result.volumeInfo;
          // const { thumbnail } = result.volumeInfo.imageLinks;
          const id = isEmpty(result.id) ? "" : result.id;
          const title = isEmpty(result.volumeInfo.title)
            ? "No Title"
            : result.volumeInfo.title;
          const authors = isEmpty(result.volumeInfo.authors)
            ? "No Authors"
            : result.volumeInfo.authors;
          const description = isEmpty(result.volumeInfo.description)
            ? "No description"
            : result.volumeInfo.description;
          const previewLink = isEmpty(result.volumeInfo.previewLink)
            ? "No previewLink"
            : result.volumeInfo.previewLink;
          const thumbnail =
            isEmpty(result.volumeInfo.imageLinks) ||
            isEmpty(result.volumeInfo.imageLinks.thumbnail)
              ? "https://placehold.it/100x100"
              : result.volumeInfo.imageLinks.thumbnail;

          const data = {
            gid: id,
            title,
            authors,
            description,
            link: previewLink,
            thumbnail
          };
          return data;
        });
        this.setState({ results: goodies, search: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onSaveClick = id => {
    //console.log("Attempting to save id " + id);
    const data = this.state.results[id];
    console.log(data); //Author data OK
    API.saveBook(data)
      .then(response => {
        console.log(response.data); //Author data NOT OKAY
        alert("Saved!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let results;
    if (this.state.results.length > 0) {
      results = (
        <ul className="list-group">
          {this.state.results.map((result, index) => {
            let authors = result.authors.join(", ");
            return (
              <li className="list-group-item" key={index}>
                <Result
                  key={index}
                  id={index}
                  title={result.title}
                  authors={authors}
                  description={result.description}
                  img={result.thumbnail}
                  link={result.link}
                  onSaveClick={this.onSaveClick}
                />
              </li>
            );
          })}
        </ul>
      );
    } else {
      results = <h6>Use the search bar to find a book.</h6>;
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

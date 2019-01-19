import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Result from "./Result";

class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savings: []
    };
  }

  componentDidMount() {
    API.getBooks().then(response => {
      this.setState({ savings: response.data });
    });
  }

  render() {
    let savings;
    if (this.state.savings.length > 0) {
      savings = (
        <ul className="list-group">
          {this.state.savings.map((saving, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Result
                  key={index}
                  id={index}
                  title={saving.title}
                  authors={saving.authors}
                  description={saving.description}
                  img={saving.thumbnail}
                  link={saving.link}
                  onSaveClick={this.onSaveClick}
                />
              </li>
            );
          })}
        </ul>
      );
    } else {
      savings = (
        <h6>
          No Savings. Click <Link to="/search">here</Link> to go find books.
        </h6>
      );
    }

    return (
      <div>
        <h1 className="display-4 text-center">Welcome to your Savings!</h1>
        {savings}
      </div>
    );
  }
}

export default Savings;

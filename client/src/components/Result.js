import React from "react";
import { Link } from "react-router-dom";
import { Col, Button } from "reactstrap";

const Result = props => {
  let authors;
  if (typeof props.authors === "string") {
    authors = props.authors;
  } else {
    authors = props.authors.map((author, i) => {
      if (i === 0) {
        return author;
      } else {
        return ", " + author;
      }
    });
  }

  return (
    <div>
      <Col size="xs-4 sm-2 md-2 lg-2 xl-2">
        <img src={props.img} alt="" className="img-thumbnail" />
      </Col>
      <Col size="xs-8 sm-10 md-10 lg-10 xl-10">
        <h3>{props.title}</h3>
        <p className="lead">{authors}</p>
        <p>{props.description}</p>
        <Button color="success" onClick={() => props.onSaveClick(props.id)}>
          Save!
        </Button>
        <Link to={props.link} target="_blank" rel="noopener noreferrer">
          <Button color="info">More Info</Button>
        </Link>
      </Col>
    </div>
  );
};

export default Result;

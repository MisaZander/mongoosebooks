import React from "react";
import { Row, Col, Button } from "reactstrap";

const Result = props => {
  return (
    <Row>
      <Col xs="4" sm="2" md="2" lg="2" xl="2">
        <img src={props.img} alt="" className="img-thumbnail" />
      </Col>
      <Col xs="8" sm="10" md="10" lg="10" xl="10">
        <h3>{props.title}</h3>
        <p className="lead">{props.authors}</p>
        <p>{props.description}</p>
        <Button
          color={props.btnAction === "save" ? "success" : "danger"}
          onClick={() => props.onClick(props.id)}
        >
          {props.btnAction === "save" ? "Shelve" : "Unshelve"}
        </Button>
        {"  "}
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button color="info">More Info</Button>
        </a>
      </Col>
    </Row>
  );
};

export default Result;

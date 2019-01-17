import React from "react";
import { Jumbotron } from "reactstrap";

const Welcome = () => {
  return (
    <Jumbotron>
      <h1 className="display-4">Mongoose Books</h1>
      <p className="lead">Find and save some books!</p>
      <hr className="my-2" />
    </Jumbotron>
  );
};

export default Welcome;

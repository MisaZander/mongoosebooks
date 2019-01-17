import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const SearchBar = props => {
  return (
    <Card>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label for="search" sm={2} className="lead">
              Search:
            </Label>
            <Col sm={10}>
              <Input
                id="search"
                type="text"
                onChange={props.onChange}
                value={props.value}
                name="search"
                placeholder="Search..."
              />
            </Col>
          </FormGroup>
          <Button
            type="button"
            onClick={props.onSubmit}
            className="btn btn-info btn-block"
          >
            Search
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default SearchBar;

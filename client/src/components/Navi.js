import React from "react";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand
} from "reactstrap";

const Navi = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">MongooseBooks</NavbarBrand>
        <Collapse navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink href="/savings">Saved Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink
                href="https://github.com/MisaZander/mongoosebooks.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );

  // return (
  //   <Navbar color="dark" dark expand="md">
  //     <NavbarBrand href="/">MongooseBooks</NavbarBrand>
  //     <Nav className="mr-auto" navbar>
  //       <NavItem>
  //         <NavLink href="/savings">Saved Books</NavLink>
  //       </NavItem>
  //       <NavItem>
  //         <NavLink href="/search">Search</NavLink>
  //       </NavItem>
  //     </Nav>
  //   </Navbar>
  // );
};

export default Navi;

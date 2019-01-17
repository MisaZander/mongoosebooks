import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const Navi = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">MongooseBooks</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/savings">Saved Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/search">Search</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navi;

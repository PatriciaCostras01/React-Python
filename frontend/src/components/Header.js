import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
  padding: "10px",
  borderBottom: "1px solid #e0e0e0",
};

const Header = ({title}) => {
    // const { title } = props;
    return (
    <Navbar style={navbarStyle} variant="light">
        <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
    </Navbar>)
};

export default Header;
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
  		<Navbar fixed="top" className="navbar animate-navbar nav-theme" collapseOnSelect expand="lg" variant="dark">
  		<Navbar.Brand href="#home">Solomon Macharia</Navbar.Brand>
  		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  		<Navbar.Collapse id="responsive-navbar-nav">
  			<Nav className="ml-auto ">
    			<Nav.Link href="#home">Home</Nav.Link>
        		<Nav.Link href="#about">About</Nav.Link>
        		<Nav.Link href="#skills">Skills</Nav.Link>
        		<Nav.Link href="#experience">Experience</Nav.Link>
        		<Nav.Link href="#projects">Projects</Nav.Link>
        		<Nav.Link href="#contact">Contact</Nav.Link>
    		</Nav>
  		</Navbar.Collapse>
		</Navbar>
    </div>
  );
};

export default MyNavbar;

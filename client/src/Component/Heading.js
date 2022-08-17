import React from 'react'
/*
    react-router-dom [Link]
    a 태그처럼 사용 됨
*/
import { Link } from 'react-router-dom'
/*
    React-Bootstrap
*/
import { Navbar, Container, Nav, } from 'react-bootstrap'



function Heading() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Upload" style={{ color: "white", textDecoration: "none" }}>Upload</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>List</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Heading
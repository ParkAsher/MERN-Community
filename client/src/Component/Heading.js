import React from 'react'
/*
    react-router-dom [Link]
    a 태그처럼 사용 됨
*/
import { Link, useNavigate } from 'react-router-dom'
/*
    React-Bootstrap
*/
import { Navbar, Container, Nav, } from 'react-bootstrap'
/*
    redux
*/
import { useSelector } from 'react-redux'
/*
    firebase
*/
import firebase from '../firebase.js'
import { loginUser } from '../Reducer/userSlice.js'



function Heading() {

    const user = useSelector((state) => state.user)

    const navigate = useNavigate();

    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate("/");
    }


    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">React-Community</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>Home</Link>
                        <Link to="/Upload" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>Upload</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                    {
                        user.accessToken ? (
                            <>
                                <Navbar.Text style={{ color: "white", cursor: "pointer", marginRight: "10px" }} onClick={() => LogoutHandler()}>Logout</Navbar.Text>
                                <br />
                                <Navbar.Text style={{ color: "white", cursor: "pointer" }}>
                                    <Link to="/MyPage" style={{ color: "white", textDecoration: "none" }}>MyPage</Link>
                                </Navbar.Text>
                            </>
                        ) : (
                            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Heading
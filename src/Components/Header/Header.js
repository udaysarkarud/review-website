import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <Navbar bg="white" variant="white" expand="lg" className='fixed-top'>
            <Container>
                <Navbar.Brand href="/" className='text-dark'>
                    <h1 className='logo'>
                        FASHION<span>LEARN</span>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            border: "1px solid black"
                        }} className='nav-link text-dark fw-bold' to="/home">Home</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            border: "1px solid black"
                        }} className='nav-link text-dark fw-bold' to="/courses">Courses</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            border: "1px solid black"
                        }} className='nav-link text-dark fw-bold' to="/about">About</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            border: "1px solid black"
                        }} className='nav-link text-dark fw-bold' to="/tutors">Tutors</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
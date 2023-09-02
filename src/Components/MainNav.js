import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MainNav() {
    return (
        <div className='container'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand href="#home">
                    <img
                        alt="Kerlys logo"
                        src="logos-icons/website_logo.webp"
                        width="auto"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Bags</Nav.Link>
                        <Nav.Link href="#link">Jewelry</Nav.Link>
                        <Nav.Link href="#link">Shoes</Nav.Link>
                        <Nav.Link href="#link">Our Brands</Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="btn btn-primary">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MainNav;
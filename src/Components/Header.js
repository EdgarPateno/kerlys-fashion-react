import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="announcement-banner">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        Free Shipping On All Orders
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        20% OFF On All Items
                    </Carousel.Item>
                </Carousel>
            </div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <div className="container">
                    <Link to="/">
                        <img
                            alt="Kerlys logo"
                            src="logos-icons/website_logo.webp"
                            width="auto"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/bags">Bags</Link>
                            <Link to="/jewelry">Jewelry</Link>
                            <Link to="/shoes">Shoes</Link>
                            <Link to="/our-brands">Our Brands</Link>
                        </Nav>
                        <Nav className="justify-content-end">
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
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
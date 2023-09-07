import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <header>
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
                </div>
            </Navbar>
        </header>
    )
}

export default Header
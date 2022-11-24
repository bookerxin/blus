
import {
    Navbar,
    Button,
    ButtonGroup,
    Container,
    Nav,
    NavbarBrand,
    Accordion,
    NavLink,
    NavDropdown, Collapse, Row, Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import DropdownItem from "react-bootstrap/DropdownItem";

const NavigationBar = () => {
    const [time, setTime] = useState(new Date().toTimeString().split(' ')[0]);

    const timerId = setInterval(
        () => {
            setTime(new Date().toTimeString().split(' ')[0])
        }, 1000
    );

    return (
        <Container>
            <Row>
                <Navbar bg='light' expand='lg'>
                    <Container>
                        <NavbarBrand>B+</NavbarBrand>
                        <Col className='col-8'>
                            <Container>
                                <Nav className='md-auto'>
                                    <NavLink>Home</NavLink>
                                    <NavLink>Books</NavLink>
                                </Nav>
                            </Container>
                        </Col>
                        <Col className='col-1'>
                            <NavbarCollapse aria-controls='basic-dropdown'>
                                <NavDropdown className='' id='basic-dropdown' title='Worlds'>
                                    <DropdownItem href='#'>Test World</DropdownItem>
                                    {/*<NavDropdown.Divider />*/}
                                    <DropdownItem href='#'>World of Goo</DropdownItem>
                                </NavDropdown>
                            </NavbarCollapse>
                        </Col>
                        <Col className='col-1'>
                            <Nav>{time}UK</Nav>
                        </Col>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

// Default export removes the need for {}
export default NavigationBar;

// TODO - Add clock in top right
// TODO - Add scrollable text box, with fade on top and bottom?
// TODO - Play more with the styles; learn Bootstrap
import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const Styles = styled.div`
  .navbar { 
      background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000;
    &:hover { color: #efb85c; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .hoverFloat {
    position: relative;
  }
  .nav-container {
      margin: 0% 10%
  }
`;

const rotate360 = keyframes`
0% { transform: rotate(0deg); }
5% { transform: rotate(0deg); }
10% { transform: rotate(10deg); }
15% { transform: rotate(0deg); }
20% { transform: rotate(-10deg); }
25% { transform: rotate(0deg); }
30% { transform: rotate(10deg); }
35% { transform: rotate(0deg); }
`

const ImageLogo = styled.img`
width: 100%;
height: 100%;
&:hover {
  animation: ${rotate360} infinite 1.0s linear;
}
`

const LogoContainer = styled.div`
width: 65px;
height: 60px;
`

function NavigationBar() {
    return (
        <React.Fragment>
            <Styles>
                <Navbar collapseOnSelect sticky="top" bg="light" variant="light" expand="md" className="nav-container">
                    <Navbar.Brand>
                        <LogoContainer>
                            <ImageLogo alt="logo" src={require('../assets/ap-logo.png')} />
                        </LogoContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavItem className="hoverFloat">
                                <Nav.Link as={Link} to="/">home</Nav.Link>
                            </NavItem>
                            <NavItem className="hoverFloat">
                                <Nav.Link as={Link} to="/about">about</Nav.Link>
                            </NavItem>
                            <NavItem className="hoverFloat">
                                <Nav.Link target="_blank" href="https://drive.google.com/file/d/1yCnSoAng7bqsfo-9aMlZv_SxUWzojPDQ/view?usp=sharing">resume</Nav.Link>
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Styles >


        </React.Fragment>

    )
}

export default NavigationBar;

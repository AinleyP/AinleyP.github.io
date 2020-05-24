import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Image, Row, Col } from 'react-bootstrap';


const floatEffect = keyframes`
0% { transform: translatey(0px); }
25% { transform: translatey(-10px); }
50% { transform: translatey(-20px); }
75% { transform: translatey(-10px); }
100% { transform: translatey(0px); }
`

const Container = styled.div`
    .bigboy {
        margin: 1% 10.5%;
        text-align: center;
    }
    .image-animation {
        animation: ${floatEffect} infinite 5.0s linear;
    }
`

const HeaderText = styled.div`
margin-top: 40%;
text-align: left;
ul {
    list-style: none;
    padding-left: 0em;
}
`

export default function HomeHeader() {
    return (
        <Container >
            <Row className="bigboy">
                <Col xs={12} md={6}>
                    <HeaderText>
                        <h1>ainley pena.</h1>
                        <ul>
                            <li>Certified AWS Solutions Architect</li>
                            <li>Project Developer @ UWBlueprint</li>
                            <li>Software Engineering @ Capital One</li>
                        </ul>
                    </HeaderText>

                </Col>
                <Col xs={12} md={6}>
                    <Image fluid alt="header-image" className="image-animation" src={require('../assets/ap-header.png')} />

                </Col>
            </Row>
        </Container>

    )
}
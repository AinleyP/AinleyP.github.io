import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Image, Row, Col } from 'react-bootstrap';
import img from '../assets/next.png';
import '../components.css';


const floatEffect = keyframes`
0% { transform: translatey(0px); }
25% { transform: translatey(-10px); }
50% { transform: translatey(-20px); }
75% { transform: translatey(-10px); }
100% { transform: translatey(0px); }
`

const Container = styled.div`
    .bigboy {
        margin: 0.5% 10.5%;
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

const ScrollDown = styled.div`
  .center-con {
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: center;
  }
  
  .round {
    transform: rotate(90deg);
    position: absolute;
    border: 2px solid #000;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    
  }
  
  #cta{width:100%; position: absolute;}
  #cta .arrow{left: 23%; color:black}
  .arrow {position: absolute; bottom: 0;  margin-left:2px; width: 12px; height: 12px; background-size: contain; top:12px; }
  .segunda{margin-left: 8px;}
  .next {
  background-image: url(${img})
  }
    
`


export default function HomeHeader() {
    return (
        <React.Fragment>
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
            <ScrollDown>
                <div className="center-con">
                    <div className="round">
                        <div id="cta">
                            <span className="arrow primera next "></span>
                            <span className="arrow segunda next "></span>
                        </div>
                    </div>
                </div>
            </ScrollDown>

        </React.Fragment>

    )
}
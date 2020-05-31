import React from 'react'
import styled from 'styled-components'
import { Image, Row, Col } from 'react-bootstrap';
import ScrollButton from '../components/ScrollToTop'




const Container = styled.div`
h5{
    margin: 5% calc(17% - 15px) 3% calc(17% + 15px);
}
`

const TitleDiv = styled.div`

`

const ImageContainer = styled.div`
text-align:center;
`

const RowContainer = styled(Row)`
text-align: left;
margin: 2% 17% 2% 17%;
`


export default function SDCPage() {
    return (
        <React.Fragment>

            <ScrollButton />

            <Container>

                <TitleDiv>
                    <h4>Social Development Center</h4>
                </TitleDiv>

                <RowContainer>
                    <ImageContainer>
                        <Image className="header-image" fluid src={require("../assets/sdc-header.png")} width="80%" />

                    </ImageContainer>

                </RowContainer>

                <RowContainer >

                    <Col md={4}>
                        <p><strong>POSITION:</strong></p>
                        <p>Project Developer </p>

                        <p><strong>TIMELINE:</strong></p>
                        <p>Jan - Apr 2020</p>
                    </Col>
                    <Col md={4}>
                        <p><strong>METHODS:</strong></p>

                        <ul>
                            <li>User Testing</li>
                            <li>Usability Testing</li>
                            <li>Wireframing</li>
                            <li>Interactive Prototypes</li>

                        </ul>
                    </Col>
                    <Col md={3} >
                        <p><strong>CODING:</strong></p>

                        <ul>
                            <li>Ruby on Rails</li>
                            <li>React</li>
                            <li>Docker</li>
                        </ul>
                    </Col>
                </RowContainer>

                <h5>PROBLEM</h5>
                <RowContainer>
                    <p> Hello</p>
                </RowContainer>



                <h5> OUR SOLUTION </h5>

                <RowContainer>
                    <p> Hello</p>
                </RowContainer>


                <h5>

                </h5>



            </Container>
        </React.Fragment>
    )
}

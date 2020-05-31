import React from 'react'
import styled from 'styled-components'
import { Image, Row, Col } from 'react-bootstrap';
import ScrollButton from '../components/ScrollToTop'




const Container = styled.div`
h5{
    margin: 5% calc(17% - 15px) 3% calc(17% + 15px);
}
ul {
    list-style: none;
    padding-left:0;
    margin-left:0;
}
.padding-left{
    padding-left:10%;
    @media (max-width: 700px) {
        padding-left: 15px;
      }
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

const NextProject = styled.div`
text-align: center;
padding-top: 10%
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

                <RowContainer>

                    <Col md={4}>
                        <p><strong>POSITION:</strong></p>
                        <p>Project Developer </p>

                        <p><strong>TIMELINE:</strong></p>
                        <p>Jan - Apr 2020</p>
                    </Col>
                    <Col md={5} className="padding-left">
                        <p><strong>METHODS:</strong></p>

                        <ul>
                            <li>User Testing</li>
                            <li>Usability Testing</li>
                            <li>Wireframing</li>
                            <li>Interactive Prototypes</li>

                        </ul>
                    </Col>
                    <Col md={3} className="padding-left">
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
                    <Col md={8}>
                        <p> The Social Development Center (SDC) is an organization in the Kitchener-Waterloo Region that aims to help individuals the community, specificially
                        low-income families, immigrants, and visible minorities, by providing fair and equitable access to social, economic and politic life.
                    </p>
                        <p> Currently, SDC helps individuals retrieve information using physical flowcharts that outline next steps for a given concern (as seen by the diagram). However, these flowcharts
                        are very unintuitive and cause our users to feel overwhelmed by the amount of information presented at once.
                        Not only does it cause confusion to our users, but it is also very unaccessible. As a University of Waterloo club we partnered with SDC
                        to create a solution that addresses these concerns. How can we help?
                    </p>

                    </Col>

                    <Col md={4}>
                        <Image fluid src={require("../assets/sdc-old-flowchart-1.png")} />

                    </Col>

                </RowContainer>



                <h5> OUR SOLUTION </h5>

                <RowContainer>
                    <Col>
                        <p> Our team decided to create a web application that allows users to navigate through the flowchart given their concerns.
                        Key components that I worked on was rearchitecturing the backend and working with parent and child nodes of the flowchart, as well as
                        working on front end features like retrieving icons from an S3 bucket. <p>Our team was able to hand off the project to the Social Development Center at the end of April 2020
                            and will not be used by over 1000 users within the Waterloo Region.
                        </p>
                        </p>
                        <p>Our stack included React, Ruby on Rails, Docker to containerize our work, and was deployed using Heroku.
                            Check out the github repo here for our <span>
                                <a target="_blank" href="https://github.com/uwblueprint/sdc-api">backend</a>
                            </span> and <span><a target="_blank" href="https://github.com/uwblueprint/sdc-web">frontend</a></span>!</p>
                    </Col>
                </RowContainer>

                <RowContainer>
                    <Col>
                        <NextProject>
                            <h6> <span><a href="/">Home</a></span> / Next Project: <span><a href="/ProjFassb">FASSB Website</a></span></h6>
                        </NextProject>
                    </Col>
                </RowContainer>


            </Container>
        </React.Fragment>
    )
}

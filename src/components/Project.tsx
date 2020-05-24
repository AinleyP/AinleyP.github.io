import React, { FC } from 'react'
import { ProjectItem } from "../types"
import styled from 'styled-components'
import { Image, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CardContainer = styled.div`
margin: 9% 10%;
box-shadow: 0 0 15px 5px rgba(0,0,0,0.1);
-moz-box-shadow: 0 0 15px 5px rgba(0,0,0,0.1);
-webkit-box-shadow: 0 0 15px 5px  rgba(0,0,0,0.1);
-o-box-shadow: 0 0 15px 5px  rgba(0,0,0,0.1);
border-radius: 8px;
.grey-text {
    color: #808080


}
`

const ImageContainer = styled.div`
width:90% 
height:100%
`

// const Image = styled.img`
// width:auto
// height: 450px
// `

const ProjectText = styled.div`
padding: 40% 0% 10% 10%;

`

const ViewButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #000000;
  border-color: #000000;
  transition: background-color 0.5s ease;
  color: #000000;
  margin: 7% 0% !important;

  &:hover {
    border: 2px solid #000000 !important;
    background-color: #000000;
    color: #fff;
    text-decoration:none;
  }
`

export interface IProject {
    projects: ProjectItem
}

export const Project: React.FC<IProject> = ({ projects }) => {
    return (
        <React.Fragment>
            <CardContainer>
                <Row>
                    <Col xs={12} md={4}>
                        <ProjectText>
                            <p className='grey-text'>{projects.type}</p>
                            <h2>{projects.name}</h2>
                            <ViewButton href={projects.link} target={projects.target}>
                                <span>{projects.linkText}</span>
                            </ViewButton>
                        </ProjectText>

                    </Col>
                    <Col xs={12} md={8}>
                        <ImageContainer>
                            <Image fluid alt={projects.name} src={require(`../assets/${projects.image}`)} />
                        </ImageContainer>
                    </Col>
                </Row>

            </CardContainer>

        </React.Fragment>
    )
}




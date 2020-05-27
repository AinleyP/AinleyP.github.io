import React, { FC } from 'react'
import { ProjectItem } from "../types"
import styled from 'styled-components'
import { Image } from 'react-bootstrap';


const GridContainer = styled.div`
    .project-button {
        position: relative;
        margin: auto;
        overflow: hidden;
    }
    
    
`

const ProjectContainer = styled.div`
box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
-moz-box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
-webkit-box-shadow: 0 0 5px 5px  rgba(0,0,0,0.1);
-o-box-shadow: 0 0 5px 5px  rgba(0,0,0,0.1);
border-radius: 8px;
`

const ImageContainer = styled.div`
width:100% 
height:100%
`



const LinkContainer = styled.a`
`

const ProjectImage = styled(Image)`
`

export interface IProject {
    projects: ProjectItem
}

export const Project: React.FC<IProject> = ({ projects }) => {
    return (
        <React.Fragment>
            <GridContainer>
                <ProjectContainer className="project-button">
                    <LinkContainer href={projects.link} target={projects.target}>
                        <ProjectImage fluid alt={projects.name} src={require(`../assets/${projects.image}`)} />
                        <div className="content-overlay ">
                            <div className="content-details fadeInTop">
                                <p>{projects.type}</p>
                                <h2 className="content-title">{projects.name}</h2>
                                <p className="content-text">{projects.linkText}</p>
                            </div>
                        </div>
                    </LinkContainer>
                </ProjectContainer>
            </GridContainer>

        </React.Fragment >
    )
}




import React from 'react'
import HomeHeader from '../components/HomeHeader'
import ScrollButton from '../components/ScrollToTop'
import { Project } from '../components/Project'
import { ProjectItem } from "../types"
import styled from 'styled-components'


const project: Array<ProjectItem> = [
    {
        name: 'Koinonia',
        type: 'Product Development',
        linkText: 'View Case Study',
        link: '/ProjKoinonia',
        image: 'koinonia-mockup.png',
        DType: 'design',
        target: '_self'
    },
    {
        name: 'NoteIfy',
        type: 'Web App Development',
        linkText: 'View on Github',
        link: 'https://github.com/AinleyP/NoteIfy',
        image: 'noteify-mockup.png',
        DType: 'dev',
        target: '_blank'

    },
    {
        name: 'SDC',
        type: 'Web App Development',
        linkText: 'View Case Study',
        link: '/ProjSDC',
        image: 'sdc-mockup.png',
        DType: 'dev',
        target: '_blank'
    },
    {
        name: 'AWS Call Center',
        type: 'Infrastructure Development',
        linkText: 'View on Github',
        link: 'https://github.com/AinleyP/call-center-application',
        image: 'aws-mockup.png',
        DType: 'dev',
        target: '_blank'

    },
    {
        name: 'FASSB Website',
        type: 'Product Development',
        linkText: 'View Case Study',
        link: '/FassbPage',
        image: 'fassb-mockup.png',
        DType: 'design',
        target: '_self'

    }
]

const ProjectHeader = styled.div`
    padding: 3% 3% 3% 3%;
`

const ProjectGrid = styled.div`
    max-width: 1800px;
    margin: 0% 10.5%;
    display: grid;
    grid-gap:3em;
    @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr); 
      }
`


function HomePage() {

    return (
        <div>
            <HomeHeader />
            <ScrollButton />

            <ProjectHeader>
                <h3> Welcome to the playground of my design and coding projects! </h3>
            </ProjectHeader>

            <ProjectGrid>
                <Project projects={project[0]} />
                <Project projects={project[1]} />
                <Project projects={project[2]} />
                <Project projects={project[3]} />
                <Project projects={project[4]} />
            </ProjectGrid>



        </div >
    )
}

export default HomePage
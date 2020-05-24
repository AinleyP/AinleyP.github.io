import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
import ScrollButton from '../components/ScrollToTop'
import { Project } from '../components/Project'
import { ProjectItem } from "../types"

const project: Array<ProjectItem> = [
    {
        name: 'Koinonia',
        type: 'Product Development',
        linkText: 'View Case Study >>',
        link: '/ProjKoinonia',
        image: 'testimage.jpg',
        DType: 'design',
        target: '_self'
    },
    {
        name: 'NoteIfy',
        type: 'Web App Development',
        linkText: 'View on Github >>',
        link: 'https://github.com/AinleyP/NoteIfy',
        image: 'noteify-mockup.png',
        DType: 'dev',
        target: '_blank'

    },
    {
        name: 'SDC',
        type: 'UW Blueprint Project',
        linkText: 'View Case Study >>',
        link: '/ProjSDC',
        image: 'sdc-mockup.png',
        DType: 'dev',
        target: '_blank'
    },
    {
        name: 'AWS Call Center',
        type: 'Infrastructure Development',
        linkText: 'View on Github >>',
        link: 'https://github.com/AinleyP/call-center-application',
        image: 'aws-mockup.png',
        DType: 'dev',
        target: '_blank'

    },
    {
        name: 'FASSB Website',
        type: 'Product Development',
        linkText: 'View Case Study >>',
        link: '/ProjFassb',
        image: 'fassb-mockup.png',
        DType: 'design',
        target: '_self'

    }
]

function HomePage() {

    return (
        <div>
            <HomeHeader />
            <ScrollButton />

            <Project projects={project[0]} />
            <Project projects={project[1]} />
            <Project projects={project[2]} />
            <Project projects={project[3]} />
            <Project projects={project[4]} />

            <Footer />

        </div >
    )
}

export default HomePage
import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaMediumM, FaLinkedinIn } from 'react-icons/fa'


const FooterIcons = styled.div`
    a {
        padding:0.5em;
        color: black;
    }
    a:hover {
        color: #efb85c
    }
`

const FooterText = styled.div`
    padding: 1em;
    p {
        text-align: center;
        color: #6c757d;
    }
`

const FooterContainer = styled.div`
text-align: center;
justify-content: center;
margin-top:7%;
margin-bottom:1%;
p {
    font-size:0.8em;
}
`


export default function Footer() {
    return (
        <React.Fragment>
            <FooterContainer>
                <FooterIcons>
                    <a href="https://github.com/AinleyP" rel="noopener noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/ainleypena" rel="noopener noreferrer" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://medium.com/@ainleypena" rel="noopener noreferrer" target="_blank">
                        <FaMediumM />
                    </a>

                </FooterIcons>
                <FooterText>
                    <p>designed and developed by ainley pena</p>
                </FooterText>
            </FooterContainer>

        </React.Fragment>
    )
}

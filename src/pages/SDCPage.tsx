import React from 'react'
import styled from 'styled-components'
import blobOne from '../assets/yellowblob1.png'


const Container = styled.div`

`

const TitleDiv = styled.div`
    &:before{
        display: block;
        content: "";
        background-image: url(${blobOne});
        background-repeat: no-repeat;
        background-size: 400px 220px;
        height: 70%;
        width: 70%;
        opacity: 0.7;
        position: absolute;
        z-index:-1;
        left:-7%;
        top: -7%;
    }
`

export default function SDCPage() {
    return (
        <React.Fragment>
            <Container>
                <TitleDiv>
                    <h4>Social Development Center</h4>
                </TitleDiv>


                <h5>PROBLEM</h5>


                <h5> OUR SOLUTION </h5>


                <h5>

                </h5>



            </Container>
        </React.Fragment>
    )
}

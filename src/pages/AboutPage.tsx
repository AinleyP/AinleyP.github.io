import React from 'react'
import { Image, Row } from 'react-bootstrap';
import styled from 'styled-components'
import blobOne from '../assets/yellowblob1.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ScrollButton from '../components/ScrollToTop'

const Container = styled.div`
.bigboy {
    margin: 7% 12% 0% 12%;
    text-align: center;
    @media (max-width: 700px) {
        margin: 5% 12% 0% 12%;
      }
}
.about-image {
    border-radius:8px;
}
h2{
    text-align: left;
    font-size:3em;
}
p{
    font-size:1.2em;
}
`

const AboutText = styled.div`
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
    span {
        color: black;
    }
}

`

const MoreInfo = styled.div`
    margin: 4% 10.5% 0% 10.5%;
}
`

const MoreInfoGrid = styled.div`
    max-width: 1800px;
    margin: 5% 12%;
    display: grid;
    grid-gap:2em;
    @media (min-width: 700px) {
        grid-template-columns: repeat(3, 1fr); 
      }
`

const MoreInfoImage = styled(Image)`
border-radius: 4px;
`

const VerticalLine = styled.div`
background-image: linear-gradient(#000, #000);
background-size: 1.7px 100%;
background-repeat: no-repeat;
background-position: center center;
padding:6em;
margin-top:2%;
`

class AboutPage extends React.Component<{}> {


    componentDidMount() {
        AOS.init({
            duration: 1500
        })
    }

    render() {

        return (
            <React.Fragment>

                <Container>

                    <ScrollButton />


                    <Row className="bigboy" data-aos="fade-up">
                        <AboutText>

                            <h2>hello! <span>i'm ainley</span></h2>
                            <p>
                                I love storytelling - whether it’s through leading an audience through a spoken word or phrasing a
                                musical melody. When it comes to both design and development, incorporating storytelling is my priority. There
                                is a journey of walking alongside the user, navigating through the problem space, and executing the
                                    vision with a memorable and lasting impression. </p>
                            <p>
                                My current interests lie within using cloud computing and technologies to develop highly efficient  and scalable products that meet the needs of the users.
                                I am a student from the University of Waterloo studying Systems Design Engineering and I am
                                currently looking for a 4-month internship for Winter 2021!
                                </p>
                            <p>
                                Let's chat! Feel free to contact me at aapena@uwaterloo.ca or check out my <span><a target="_blank" href="https://medium.com/@ainleypena">medium articles</a></span>!
                                </p>
                        </AboutText>


                    </Row>
                </Container>

                <VerticalLine>

                </VerticalLine>

                <MoreInfo>

                    <h3>A little more about me . . .</h3>
                    <MoreInfoGrid >

                        <MoreInfoImage fluid alt="spoken-word" src={require('../assets/spoken-word.png')} />
                        <MoreInfoImage fluid alt="ultimate-frisbee" src={require('../assets/ulti-frisbee.png')} />
                        <MoreInfoImage fluid alt="humanitarian-trip" src={require('../assets/dominican-trip.png')} />

                    </MoreInfoGrid>


                </MoreInfo>





            </React.Fragment >
        )

    }

}

export default AboutPage

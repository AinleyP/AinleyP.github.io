import React from 'react'
import { Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'
import ScrollButton from '../components/ScrollToTop'


const Container = styled.div`
h5{
    margin: 5% calc(17% - 15px) 3% calc(17% + 15px);
}
.noPadding {
    margin: 10px 0px 40px 0px
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

const ImageContainer = styled.div`
text-align:center;
`


const IconContainer = styled.div`
text-align: center !important;;
justify-content: center;
p {
    text-align:center;
}
img {
    margin: 1.5em;
}
`

const FullWidthImage = styled(Image)`
width:100%;
height: auto;
`

const RowContainer = styled(Row)`
text-align: left;
margin: 2% 17% 2% 17%;
`

const NextProject = styled.div`
text-align: center;
padding-top: 10%
`


export default function FassbPage() {
    return (
        <React.Fragment>
            <Container>

                <ScrollButton />

                <h4>FASSB Website</h4>

                <RowContainer>
                    <ImageContainer>
                        <Image className="header-image" fluid src={require("../assets/fassb-header.png")} width="80%" />

                    </ImageContainer>

                </RowContainer>



                <RowContainer>

                    <Col md={4}>
                        <p><strong>POSITION:</strong></p>
                        <p>UX Designer & Developer </p>

                        <p><strong>TIMELINE:</strong></p>
                        <p>Jan - Apr 2019</p>
                    </Col>
                    <Col className="padding-left" md={5}>
                        <p><strong>METHODS:</strong></p>

                        <ul>
                            <li>User Interviews</li>
                            <li>Card Sorting</li>
                            <li>Wireframes</li>
                            <li>Rapid Prototyping</li>
                            <li>Surveys</li>
                            <li>Post-It Activty</li>
                        </ul>
                    </Col>
                    <Col className="padding-left" md={3} >
                        <p><strong>CODING:</strong></p>

                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JQuery</li>
                            <li>PHP</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Col>
                </RowContainer>

                <h5>PROBLEM</h5>

                <RowContainer >
                    <Col>
                        <p>Retrieval of various branch information is overwhelming and time consuming. Before, FASSB staff would have to search through multiple channels such as their N:Drive,
                        Sharepoint, Google Drive, Teamwork and even dig through their emails to locate information.
					    How can we help?</p>
                    </Col>
                </RowContainer>

                <RowContainer>
                    <Col md={8} >
                        <div >
                            <h5 className="noPadding">GOAL</h5>

                            <p>To create a user friendly and simple internal website that centralizes branch information for
                            all FASSB staff, including information about branch units, projects, and events; access to
                            branch resources and tools; and training and onboarding materials for new staffs</p>
                        </div>

                    </Col>
                    <Col md={4}>
                        <h5 className="noPadding">KEY BENCHMARKS</h5>
                        <ul>
                            <li> User friendly simple </li>
                            <li> Easy to update </li>
                            <li> AODA compliant </li>
                        </ul>
                    </Col>
                </RowContainer>

                <h5>DESIGN PROCESS</h5>

                <RowContainer >
                    <Col md={12}>
                        <FullWidthImage fluid alt="fassb design process" src={require("../assets/fassb-design-process.png")} />
                    </Col>
                </RowContainer>

                <h5>USER RESEARCH</h5>

                <RowContainer>
                    <Col>
                        <p> When assigned this project, there was an existing mockup created by previous students, but
                        no user research was recorded or documented. To gather more information, we engaged
                        stakeholders by conducting 30 minute interviews with 12 branch staff ranging in teams,
							roles, and experiences - team lead, senior manager, business coordinator. </p>
                    </Col>

                </RowContainer>

                <RowContainer >
                    <Col md={4}>
                        <IconContainer className="padding">

                            <img src={require("../assets/icon-cardsort.png")} alt="cardsort icon" width="20%;" />
                            <p><strong>1) CARD SORTING</strong></p>

                        </IconContainer>


                        <p>Gathered information regarding site architecture by presenting users with potential
                             features and making them sort them from highest priority to least priority</p>

                    </Col>
                    <Col md={4}>
                        <IconContainer className="padding">

                            <img src={require("../assets/icon-question.png")} alt="question icon" width="20%;" />
                            <p><strong>2) USER INTERVIEWS</strong></p>

                        </IconContainer>

                        <p>Asked specific questions about the problem space, pain points, relevant content, system
                            architecture, site architecture, and design aspects.</p>
                    </Col>
                    <Col md={4} ml-md-2 bg-info>
                        <IconContainer className="padding">

                            <img src={require("../assets/icon-design.png")} alt="design icon" width="20%;" />
                            <p ><strong>3) DESIGN FEEDBACK</strong></p>

                        </IconContainer>

                        <p>Collected feedback regarding past mockups created by prior students and users provided
                            input on functionality, intuitivity, and overall design.</p>
                    </Col>
                </RowContainer>


                <RowContainer>

                </RowContainer>

                <h5>KEY INSIGHTS & THEMES</h5>

                <RowContainer>
                    <Col>
                        <p>After conducting user interviews and filtering their feedback, we discovered that the development of
                        the FASSB website needs to achieve 3 overall functions:</p>
                    </Col>

                </RowContainer>

                <RowContainer>
                    <Col md={2}>
                        <FullWidthImage alt="figure1" src={require("../assets/figureman-1.png")} />
                    </Col>
                    <Col md={6}>
                        <FullWidthImage alt="figure1" src={require("../assets/figuretext-1.png")} />
                    </Col>
                    <Col md={4}>
                    </Col>
                </RowContainer>

                <RowContainer>
                    <Col md={4}>
                    </Col>
                    <Col md={6}>
                        <FullWidthImage alt="figure2" src={require("../assets/figuretext-2.png")} />
                    </Col>
                    <Col md={2}>
                        <FullWidthImage alt="figure2" src={require("../assets/figureman-2.png")} />
                    </Col>
                </RowContainer>


                <RowContainer>
                    <Col md={2}>
                        <FullWidthImage alt="figure3" src={require("../assets/figureman-3.png")} />
                    </Col>
                    <Col md={6}>
                        <FullWidthImage alt="figure3" src={require("../assets/figuretext-3.png")} />
                    </Col>
                    <Col md={4}>
                    </Col>
                </RowContainer>

                <h5>PERSONA</h5>

                <RowContainer>

                    <Col md={6}>

                        <Image fluid src={require("../assets/persona-1.png")} alt="persona1" />
                    </Col>
                    <Col md={6}>
                        <Image fluid src={require("../assets/persona-3.png")} alt="persona3" />
                    </Col>
                </RowContainer>

                <h5>SITEMAP</h5>


                <RowContainer>
                    <Col>

                        <p>I began by mapping out the system and along with its features to understand the user flow, site
                        architecutre, and key sections of each page. This was created to help the team understand where
                        some of the pain points may occur and provide them with a visualization of how we will organize
                        the system</p>

                        <FullWidthImage src={require("../assets/Sitemap.png")} />
                    </Col>



                </RowContainer>

                <h5>DESIGN, DEVELOP, FEEDBACK, REPEAT!</h5>

                <RowContainer>
                    <Col>

                        <p>We decided to use an agile approach when working on this project. My team and I created a project
                        backlog and broke down the different tasks into two week sprints - and at the end of each sprint
                        we would conduct a focus group session with our 12 interviewed users for feedback. Right after
                        one sprint, we immediately began working on the next. Using this scrum methodology, we were able
                        to develop the most important features first and the outstanding features for future
						development. </p>

                    </Col>

                </RowContainer>

                <h5> WIREFRAMES & HIGH-FIDELITY MOCKUPS</h5>


                <RowContainer>

                    <Col>

                        <p>At the initial stages of development, we quickly drafted various wireframes to conclude what the
                        overall look and feel should be. An overarching comment from users was how the third design
                        brings a new fresh appeal to the company's current environment. Unlike the countless Intranet
                        sites that have the traditional side bar navigation, landing page I created was a full-width
                    website that shares similarities to the design of Netflix. After countless feedback, we continued to tweak and improve the current design.</p>

                    </Col>

                </RowContainer>

                <RowContainer>

                    <Col md={4}>
                        <Image fluid src={require("../assets/lp-1.png")} width="80%" />
                    </Col>
                    <Col md={4}>
                        <Image fluid src={require("../assets/lp-2.png")} width="80%" />
                    </Col>
                    <Col md={4}>
                        <Image fluid src={require("../assets/lp-3.png")} width="80%" />
                    </Col>

                </RowContainer>


                <RowContainer>

                    <Col md={4}>
                        <Image fluid src={require("../assets/lp-4.png")} width="80%" />
                    </Col>
                    <Col md={4}>
                        <Image fluid src={require("../assets/lp-6.png")} width="80%" />
                    </Col>
                    <Col md={4}>
                        <Image fluid src={require("../assets/lp-final.png")} width="80%" />
                    </Col>

                </RowContainer>
                <h5>DEVELOPMENT</h5>

                <RowContainer>
                    <Col md={5}>
                        <p>After creating a mockup for a page, we would move on to development. To create each page,
                        I used a template PHP file with the formatted entry content written in HTML and CSS. We
                        added addition features like a slideshow, accordion drop down, filtering buttons, and
						scroll features using Jquery and Bootstrap.</p>

                    </Col>
                    <Col md={7}>
                        <Image fluid src={require("../assets/prototype-2.PNG")} />

                    </Col>


                </RowContainer>

                <h5>USER TESTING & FEEDBACK</h5>

                <RowContainer>
                    <Col>
                        <p>Throughout the prototyping phase, we would continually ask for feedback from our end users. Some
						ways we engaged them were:</p>
                    </Col>
                </RowContainer>

                <RowContainer>
                    <Col md={4}>
                        <Image fluid src={require("../assets/branch-demo.JPG")} />

                    </Col>
                    <Col md={8}>
                        <p><strong>1) Open discussion focus group feedback sessions</strong></p>
                        <p>After each 2 week sprint plan we regrouped with the 12 initial users to show them our
                        progress and obtain their feedback. We briefly gave an overview of the new features of
								the page and confronted them with content and design questions.</p>

                    </Col>

                </RowContainer>

                <RowContainer>
                    <Col md={4}>
                        <Image fluid src={require("../assets/fassbsurvey-1.PNG")} />

                    </Col>
                    <Col md={8}>
                        <p><strong>2) Online Surveys</strong></p>
                        <p>We provided users with the mockups of each page and asked questions regarding
                        content, design, intuitiveness and other features of the website. We took into account
								all feedback, but assessed whether or not to implement it at our current position.</p>

                    </Col>

                </RowContainer>

                <RowContainer>
                    <Col md={4}>
                        <Image fluid src={require("../assets/postit-activity.JPG")} />

                    </Col>
                    <Col md={8}>
                        <p><strong>3) Interactive navigation session with entire branch</strong></p>
                        <p>Instead of explaining our progress of the website, we gave them the beta version of
                        the website and let them click through the website. This allowed us to test the
                        intuitiveness of our website. We engaged their feedback using a Post-It Notes Activity. </p>

                    </Col>

                </RowContainer>

                <h5>REFLECTIONS</h5>

                <RowContainer>

                    <Col>

                        <ol>
                            <li>How to engage users and its importance of continuously consulting users and getting their
                            feedback</li>
                            <li>Being too detail-focused in the beginning may cause you to have tunnel vision. A good way to
                            improve teamwork efficiency is to set a mediocre quality standard first, try to get it as
                        fast as possible and then improve it, instead of being perfect at the beginning</li>
                            <li>Difficulty between having a concrete design and developing the exact same design.</li>
                            <li>Understand how to effectively have assess user feedback to avoid "too many chefs in the
                        kitchen"</li>
                        </ol>
                    </Col>
                </RowContainer>

                <RowContainer>
                    <Col>
                        <NextProject>
                            <h6> <span><a href="/">Home</a></span> / Next Project: <span><a href="/ProjSDC">SDC</a></span></h6>
                        </NextProject>
                    </Col>
                </RowContainer>


            </Container>


        </React.Fragment >

    )
}

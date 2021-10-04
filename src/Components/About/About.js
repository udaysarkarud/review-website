import React from 'react';
import './About.css'
import background from '../../images/background11.jpg';
import about from '../../images/about.png'
import bgTwo from '../../images/bgTwo.png'
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div className='about' style={{
                backgroundImage: `url(${bgTwo})`,
                backgroundPosition: `top`,
                backgroundSize: `100%`,
                backgroundAttachment: `fixed`,
                backgroundRepeat: `no-repeat`
            }} >
                <h1 className='w-50 mx-auto'>
                    WHO ARE WE?
                </h1>
            </div>
            <h1 className='text-center fw-bold mt-5'>
                ABOUT US
            </h1>
            <div className='pt-5 mt-5' style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: `center`,
            }} >

                <Container className='py-2'>
                    <Row className='my-5 d-flex align-items-center'>
                        <Col sm={12} lg={6}>
                            <img className='w-100' src={about} alt="" />
                        </Col>
                        <Col className='bg-light py-5 px-4 shadow-lg' sm={12} lg={6}>
                            <h2>
                                <b>Who Are We?</b>
                            </h2>
                            <p className='text-muted'>
                                Parsons has educated generations of successful designers and today leads the global industry though innovative, rigorous programs and initiatives. Parsons’ School of Fashion engages the spectrum of fashion design and marketing practice, competitively situating graduates academically and professionally. You develop your voice within a thriving field while innovating ways to bring beautiful, responsible, and relevant work to light.
                                <br />
                                <strong>Holistic Design Practice</strong><br />
                                Your education weaves project-based methodology with social justice and environmental sustainability. In studios and seminars, you learn specialized techniques and innovative approaches to fashion-related work ranging from concept development and marketing to responsible manufacturing and global distribution.
                                <br />
                                <strong>Learning From Professionals</strong><br />

                                A faculty of professionals help you develop a foundation to your practice in design, marketing, PR, or merchandising. Instructors share their experience and connections in classes that give you industry exposure and networking opportunities with fashion firms including Louis Vuitton, Swarovski, Under Armor, UNIQLO, Woolmark, and Kering as well as organizations and companies like the United Nations, Goodwill, Google, and the Council of Fashion Designers of America (CFDA).
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;
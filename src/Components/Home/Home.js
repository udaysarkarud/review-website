import React from 'react';
import './Home.css'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import image from '../../images/gradient-2.png'
import imgTwo from '../../images/img.png'
import imgThree from '../../images/img-main.jpg'
import imgOne from '../../images/sl1.jpg'
import imgFour from '../../images/sl2.jpg'
import imgFive from '../../images/sl3.jpg'
import OurCourses from '../../hooks/ourCourses';
import { Link } from 'react-router-dom';



const Home = () => {
    const [courses] = OurCourses();
    return (
        <div className='pt-4'>
            <Row xs={1} lg={2} className='align-items-center g-0 my-5 banner'>

                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={imgThree} alt="Card image" />
                        <Card.ImgOverlay className='text-center '>
                            <Card.Img className='mx-auto imgs' src={imgTwo} alt="Card image" />
                            <h1 className='banner-tag'>
                                BUILD YOUR SKILLS AND MAKE CAREER ON FASHION INDUSTRY
                                <br />
                                <Link to='/about'><Button variant="outline-light" className='px-5 mt-3'><b>Learn More</b></Button></Link>
                            </h1>

                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col>
                    <Carousel >
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgOne}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgFour}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src={imgFive}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Container className='position-relative'>
                <img className='image' src={image} alt="" />
                <div className='text-center'>
                    <h1 className='fw-bold bg-dark text-light py-3 w-75 mx-auto my-5 rounded'>
                        Fashion and Sustainability
                    </h1>
                    <p className='px-5'>
                        Get an introduction to issues, agendas and contexts relating to fashion and sustainability in a changing world with this Fashion and Sustainability - Understanding Luxury Fashion in a Changing World course from London School of Fashion by FutureLearn.
                    </p>
                </div>
                <Row xs={1} lg={2} className="g-4 mx-5">
                    {
                        courses.slice(0, 4).map(course => <Courses key={course.id} course={course}></Courses>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Home;
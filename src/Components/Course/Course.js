import React from 'react';
import './Course.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import OurCourses from '../../hooks/ourCourses';
import courseBg from '../../images/coursebg.png'
const Course = () => {
    const [courses] = OurCourses();
    return (
        <div className=' course' style={{
            backgroundImage: `url(${courseBg})`,
            backgroundPosition: `canter`,
            backgroundSize: `cover`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: `no-repeat`

        }}>
            <h1 className='text text-center pt-5'>
                DISCOVER OUR COURSES
            </h1>
            {
                courses.map(course =>
                    <Container key={course.id}>
                        <Card className=' border-0 bg-transparent pt-5'>
                            <Row className='d-flex align-items-center'>
                                <Col sm={12} lg={7} className='overflow-hidden course-img'>
                                    <Card.Img variant="top" src={course.bannerImg} />
                                </Col>
                                <Col sm={12} lg={5} className='course-text'>
                                    <Card.Body className='h-100 text-white'>
                                        <Card.Title style={{ color: `#df5c4f` }}>{course.courseName}</Card.Title>
                                        <Card.Text>
                                            <p>
                                                {course.details.slice(0, 300)}
                                            </p>
                                        </Card.Text>
                                        <hr />
                                        <Row>
                                            <Col className='card-text'>
                                                <p>
                                                    {course.skill.one}
                                                </p>
                                                <p>
                                                    {course.skill.two}
                                                </p>
                                                <p>
                                                    {course.skill.three}
                                                </p>
                                                <Button variant="outline-light"><b><small>{course.price}</small></b></Button>
                                            </Col>
                                            <Col>
                                                <h5 style={{ color: `#df5c4f` }}>
                                                    {course.instructor}
                                                </h5>
                                                <img className='w-75 mx-auto ' src={course.instructorImg} alt="" />
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Col>
                            </Row>
                            <hr />
                        </Card>
                    </Container>

                )
            }
        </div>
    );
};

export default Course;
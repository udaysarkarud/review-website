import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tutor from '../Tutor/Tutor';

const Tutors = () => {
    const [tutors, setTutors] = useState([])
    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res => res.json())
        .then(data=> setTutors(data))
    },[])
    return (
        <Container className='mt-5 pt-5 '>
            <h1 style={{ color: `#df5c4f` }} className='text-center mb-5 fw-bolder'>
            YOUR TUTORS
            </h1>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                tutors.map(tutor=> <Tutor key = {tutor.id} tutor = {tutor}></Tutor>)
            }
        </Row>
        </Container>
    );
};

export default Tutors;
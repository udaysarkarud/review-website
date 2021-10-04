import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <Container className='mt-5 py-5 text-center text-white'>
                <div className='fs-3'>
                    <i className="fab fa-facebook me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <p>
                    Copyright © 2007–2021 FashionLearn.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
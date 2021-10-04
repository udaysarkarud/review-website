import React from 'react';
import { Alert } from 'react-bootstrap';

const Notfound = () => {
    return (
        <div className='mt-5 pt-5 text-center w-50 mx-auto'>
            <Alert variant="danger">
                404 Page Not Found !
            </Alert>
        </div>
    );
};

export default Notfound;
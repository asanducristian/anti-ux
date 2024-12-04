import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TextTurbulanceWrapper from './TextTurbulanceWrapper';

const FormThank = ({ submitted }) => {
    useEffect(() => { console.log(submitted) }, [submitted])
    return (
        <div className="p-8 min-h-screen w-full bg-gray-100 flex items-center justify-center">
            <Container maxWidth="sm" className="bg-white p-8 rounded-lg shadow-lg">
                <TextTurbulanceWrapper textSize={20}>{`${submitted ? `Thank you for submitting` : `Skipping the form are we?!?`}`}</TextTurbulanceWrapper>

                <Typography variant="h6" component="h1" className="font-bold mb-4">
                    Not to worry, it's useless anyway, just for your own fun.
                </Typography>
            </Container>
        </div>
    );
};

export default FormThank;

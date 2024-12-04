import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import TextTurbulanceWrapper from './TextTurbulanceWrapper';
import { DATA } from '../utils/constants';

const Content = () => {
    // Calculate and log the result
    return (
        <div className="p-8 w-full bg-gray-100 flex items-center justify-center">
            <Container
                className="w-full max-h-[6000px] h-[6000px] overflow-y-auto m-8 bg-white p-8 rounded-lg shadow-lg"
                style={{
                    maxHeight: "6000px",
                }}
            >
                <TextTurbulanceWrapper textSize={20}>
                    {`TESTTESTTEST TESTTESTTEST TESTTESTTEST TESTTESTTEST TESTTESTTEST TESTTESTTEST TESTTESTTEST TESTTESTTEST`}
                </TextTurbulanceWrapper>

                <Typography variant="h6" component="h1" className="font-bold mb-4">
                    TESTTESTTEST
                </Typography>
            </Container>
        </div>
    );
};

export default Content;

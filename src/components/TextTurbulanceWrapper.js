import React, { useState, useEffect } from 'react';
import { Typography} from '@mui/material';
import { TextTurbulence } from 'react-intuitive-components';

const TextTurbulanceWrapper =  React.memo(({textSize, children}) => {

    return (
        <Typography variant="h2" component="h1" className="font-bold mb-4">
            <TextTurbulence randomColors={true} randomLetterSizes={true} randomWordSizes={false} textSize={textSize}>
                {children}
            </TextTurbulence>
        </Typography>
    );
});

export default TextTurbulanceWrapper;

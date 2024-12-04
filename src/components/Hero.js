import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { TextTurbulence } from 'react-intuitive-components';
import TextTurbulanceWrapper from './TextTurbulanceWrapper';

const Hero = () => {
    const imageWidth = 2500;
    const imageHeight = 2000;

    const imageUrl = `https://picsum.photos/${imageWidth}/${imageHeight}?grayscale`;

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollX);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const rotation = Math.min(scrollY / window.innerHeight * 90, 36);

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <Container
                maxWidth="lg"
                className="text-center text-white"
            >
                <div>
                    <TextTurbulanceWrapper randomColors={true} randomLetterSizes={true} randomWordSizes={false} textSize={50}>
                        Welcome to the anti-UX site!
                    </TextTurbulanceWrapper>
                    <Typography variant="h6" className="text-black mb-8 text-lg">
                        First, let's get to know you better!
                    </Typography>

                    <div
                        className="text-black mx-auto mt-8 cursor-pointer"
                        style={{
                            transform: `rotate(-${rotation * 2.5}deg)`,
                            transition: 'transform 0.3s ease-out',
                            fontSize: '400px',
                        }}
                    >
                        <ArrowDownwardIcon fontSize="inherit" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;

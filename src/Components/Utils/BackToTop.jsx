import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            console.log(window)
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible &&
            <Box
                onClick={scrollToTop}
                position='fixed'
                bottom='20px'
                right={['16px', '84px']}
                zIndex={3}>
                <Image src='https://icon-library.com/images/back-to-top-icon-png/back-to-top-icon-png-8.jpg'
                    w='50px'
                    h='60px'
                />
            </Box>
}
        </>
    );
}
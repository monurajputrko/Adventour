import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Image } from '@chakra-ui/react';
import img1 from "./photos/1.jpg"
import img2 from "./photos/2.jpg"
import img3 from "./photos/3.jpg"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      src: {img1}
    },
    {
      label: 'Bird',
      src:{img2}
    },
    {
      label: 'Bali, Indonesia',
      src:{img3}
    }
  ];

const Carousel = () => {
  const images = [img1,img2,img3];
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
    sx={{ maxWidth: 400, flexGrow: 1 }}>
     <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((ele, i) => (
                    <div key={i} style={{borderRadius:"20px"}} >
                        {Math.abs(activeStep - i) <= 2 ? (
                            <Image
                                sx={{height: '75vh',maxWidth: 400,overflow: 'hidden',width: '100%',}}
                                src= {images[i]}
                                alt={ele.label}
                                style={{borderRadius:"5px"}}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
  </Box>
  )
}

export default Carousel


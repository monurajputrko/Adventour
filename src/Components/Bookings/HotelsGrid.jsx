import React, { useState } from 'react'
import * as C from '@chakra-ui/react'
const HotelsGrid = ({mainImg,title,description,address}) => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <C.Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      p={5}
    >
      <C.Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '300px' }}
        maxH={{ base: '200px', sm: '300px' }}
        src={mainImg}
        alt='Hotel'
      />

      <C.Stack>
        <C.CardBody>
          <C.Heading size='md'>{title}</C.Heading>
          <C.Collapse startingHeight={100} in={show}>
            {description}
          </C.Collapse>
          <C.Button size='sm' onClick={handleToggle} mt='1rem'>
            Show {show ? 'Less' : 'More'}
          </C.Button>
        </C.CardBody>

        <C.CardFooter>
          <C.Button variant='solid' colorScheme="purple">
            Book Now
          </C.Button>
        </C.CardFooter>
      </C.Stack>
    </C.Card>
  )
}

export default HotelsGrid
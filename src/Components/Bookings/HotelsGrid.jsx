import React, { useState } from 'react'
import * as C from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const HotelsGrid = ({mainImg,title,description,address,secImg,stars}) => {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <C.Grid>
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
          src={!show?mainImg:secImg}
          alt='Hotel'
        />

        <C.Stack>
          <C.CardBody>
            <C.Heading size='md'>{title}</C.Heading>
            <C.Collapse startingHeight={70} in={show}>
              {description}
            </C.Collapse>
            <C.Button p="0" as={C.Link} bg="white" _hover={{bg:"white"}} _focus={{}} size='sm' onClick={handleToggle} mt='1rem'>
              Show {show ? 'Less' : 'More'}
              {show ? <ChevronUpIcon boxSize={6} /> : <ChevronDownIcon boxSize={6} />}
            </C.Button>
            

          </C.CardBody>

          <C.CardFooter>
            <C.Button variant='solid' colorScheme="twitter">
              Book Now
            </C.Button>
          </C.CardFooter>
        </C.Stack>
      </C.Card>
    </C.Grid>
  )
}

export default HotelsGrid
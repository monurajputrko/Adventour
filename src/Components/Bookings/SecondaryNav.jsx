import React, { useState } from 'react'
import * as C from '@chakra-ui/react'
import { EditIcon, TriangleDownIcon } from '@chakra-ui/icons'

const SecondaryNav = ({locate,setLocate,setCheckI,setCheckO}) => {
  const { isOpen, onOpen, onClose } = C.useDisclosure()
  const [location,setLocation] = useState(locate)
  const [checkInDate,setCheckInDate] = useState('2023-08-16')
  const [checkOutDate,setCheckOutDate] = useState('2023-08-17')
  const handleChange = (e) => {
    if(e.target.name === 'checkin'){ 
      setCheckInDate(e.target.value)
      setCheckI(e.target.value)
    }else{
      setCheckOutDate(e.target.value)
      setCheckO(e.target.value)
    }
  }
  return (<>
    <C.Button colorScheme='cyan' size="sm" borderRadius={0} zIndex={4} position={'fixed'} top='0' bg="cyan.100" w="100vw" onClick={onOpen}>
      <TriangleDownIcon color='white' />
    </C.Button>
    <C.Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
      <C.DrawerOverlay />
      <C.DrawerContent>
        <C.DrawerBody bg="cyan.100">
          <C.Flex p={{ base: "15px", lg: "20px 50px" }} color={'white'} gap="15px" alignItems="center" w={{ base: "100%"}} flexDirection={{ base: "column", lg: "row" }}>
          <C.Image w='60px' h='50px' src='https://adventour-app.vercel.app/static/media/logo.c4d46c4063175340fdd8.png'></C.Image>
            <C.FormControl>
              <C.FormLabel color="cyan.600">Location</C.FormLabel>
              <C.Input type="text" color="black" value={location} onChange={(e)=>setLocate(e.target.value)} bg="white.300" placeholder='City name, location, or Specific hotel' />
            </C.FormControl>
            <C.FormControl>
              <C.FormLabel color="cyan.600">Checkin</C.FormLabel>
              <C.Input name="checkin" min={'2023-08-16'} onChange={handleChange} value={checkInDate} type="date" color="black" bg="white.300" placeholder='City name, location, or Specific hotel' />
            </C.FormControl>
            <C.FormControl>
              <C.FormLabel color="cyan.600">Checkout</C.FormLabel>
              <C.Input name="checkout" onChange={handleChange} min={'2023-08-17'} value={checkOutDate} type="date" color="black" bg="white.300" placeholder='City name, location, or Specific hotel' />
            </C.FormControl>

            <C.FormControl flexGrow="2" mt="25px">
              <C.Button size="md" color="white" _hover={{}} bg="cyan.200" border="2px solid white" fontWeight="bolder" fontSize="20px" p="15px 3em">Search</C.Button>
            </C.FormControl>
          </C.Flex>
        </C.DrawerBody>
      </C.DrawerContent>
    </C.Drawer>
  </>
  )
}

export default SecondaryNav
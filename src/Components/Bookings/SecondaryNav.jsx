import React, { useState } from 'react'
import * as C from '@chakra-ui/react'
import { EditIcon, TriangleDownIcon } from '@chakra-ui/icons'

const SecondaryNav = () => {
  const { isOpen, onOpen, onClose } = C.useDisclosure()
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (<>
    <C.Button colorScheme='cyan' size="sm" borderRadius={0} bg="cyan.100" w="100vw" onClick={onOpen}>
      <TriangleDownIcon color='white' />
    </C.Button>
    <C.Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
      <C.DrawerOverlay />
      <C.DrawerContent>
        <C.DrawerBody bg="cyan.100">
          <C.Flex p={{ base: "15px", lg: "20px 50px" }} color={'white'} gap="15px" alignItems="center" w={{ base: "100%"}} flexDirection={{ base: "column", lg: "row" }}>
            <C.FormControl>
              <C.FormLabel color="cyan.600">Location</C.FormLabel>
              <C.Input type="text" color="black" bg="white.300" placeholder='City name, location, or Specific hotel' />
            </C.FormControl>
            <C.FormControl>
              <C.FormLabel color="cyan.600">Checkin</C.FormLabel>
              <C.Input name="checkin" onChange={handleChange} type="date" color="black" bg="white.300" placeholder='City name, location, or Specific hotel' />
            </C.FormControl>
            <C.FormControl>
              <C.FormLabel color="cyan.600">Checkout</C.FormLabel>
              <C.Input name="checkout" onChange={handleChange} type="date" color="black" bg="white.300" placeholder='City name, location, or Specific hotel' />
            </C.FormControl>

            <C.FormControl flexGrow="2">
              <C.FormLabel color="cyan.600">Change Filters</C.FormLabel>
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
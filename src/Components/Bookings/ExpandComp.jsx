import { Box, Flex, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Collapse } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

function ExpandComp() {
  const { isOpen, onToggle } = useDisclosure()
  const theme=useSelector(state=>state.theme);
  return (
    <Box color={!theme ? 'blackAlpha.800' : 'whiteAlpha.900'} textAlign={'left'} mt={'60px'} pb={'40px'} mx={'auto'} w={{ base: '90%', md: '76%', lg: '76%' }}>

      <Flex gap={'5'} direction={{base:'column', md: 'column', lg:'row'}} >
        <Box w={{ base: '90%', md: '76%', lg: '550px' }} bg={theme ? '#191b1d' : 'white'} boxShadow={'lg'} borderRadius={'20px'} shadow='md'>
          <Box fontWeight={'600'} px={'30px'} py={'20px'} w={'100%'} onClick={onToggle}>Top Destinations</Box>
          <Collapse in={isOpen} animateOpacity>
            <Box p='0px 40px 20px 40px' minH={'400px'}>
              <SimpleGrid lineHeight={'30px'} columns={{base:'1', md:'2', lg:'3'}}>
                <Flex direction={'column'} >
                  <Text>Africa</Text>
                  <Text>Asia</Text>
                  <Text>Australia</Text>
                  <Text>Europe</Text>
                  <Text>Latin America</Text>
                  <Text>South America</Text>
                  <Text>Egypt</Text>
                  <Text>Morocco</Text>
                  <Text>South Africa</Text>
                  <Text>Bali</Text>
                  <Text>China</Text>
                  <Text>India</Text>
                </Flex>
                <Flex direction={'column'}  mr={{ base: '0', md: '30px', lg: '30px' }}>
                  <Text>Japan</Text>
                  <Text>New Zealand</Text>
                  <Text>Philippines</Text>
                  <Text>Sri Lanka</Text>
                  <Text>Thailand</Text>
                  <Text>Vietnam</Text>
                  <Text>Croatia</Text>
                  <Text>Danube River Cruises</Text>
                  <Text>Eastern Europe</Text>
                  <Text>Great Britain & UK</Text>
                  <Text>Greece</Text>
                  <Text>Greek Islands</Text>
                </Flex>
                <Flex direction={'column'} >
                  <Text>Iceland</Text>
                  <Text>Ireland</Text>
                  <Text>Italy</Text>
                  <Text>Scandinavia</Text>
                  <Text>Portugal</Text>
                  <Text>Rhine River Cruises</Text>
                  <Text>Scotland</Text>
                  <Text>Spain</Text>
                  <Text>Turkey</Text>
                  <Text>Canada</Text>
                  <Text>Costa Rica</Text>
                  <Text>USA</Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </Collapse>
        </Box>
        <Box w={{ base: '90%', md: '76%', lg: '300px' }} bg={theme ? '#191b1d' : 'white'} boxShadow={'lg'} borderRadius={'20px'} shadow='md'>
          <Box fontWeight={'600'} px={'30px'} py={'20px'} w={'100%'} onClick={onToggle}>Top Operators</Box>
          <Collapse in={isOpen} animateOpacity>
            <Box p='0px 40px 20px 40px' minH={'400px'}>
              <Flex direction={'column'} lineHeight={'30px'} >
                <Text>Contiki</Text>
                <Text>Cosmos</Text>
                <Text>G Adventures</Text>
                <Text>Intrepid</Text>
                <Text>Topdeck</Text>
                <Text>Trafalgar</Text>
              </Flex>
            </Box>
          </Collapse>
        </Box>
        <Box w={{ base: '90%', md: '76%', lg: '300px' }} bg={theme ? '#191b1d' : 'white'} boxShadow={'lg'} borderRadius={'20px'} shadow='md'>
          <Box fontWeight={'600'} px={'30px'} py={'20px'} w={'100%'} onClick={onToggle}>Top Adventure Styles</Box>
          <Collapse in={isOpen} animateOpacity>
            <Box p='0px 40px 20px 40px' minH={'400px'}  >
              <Flex direction={'column'} lineHeight={'30px'} >
                <Text>Adventure</Text>
                <Text>Bicycle</Text>
                <Text>Hiking & Trekking</Text>
                <Text>River Cruise</Text>
                <Text>Africa Safari</Text>
                <Text>In-Depth Cultural</Text>
                <Text>Cosmos</Text>
                <Text>Coach / Bus</Text>
                <Text>Train / Rail</Text>
                <Text>Beach</Text>
                <Text>Family</Text>
                <Text>Private</Text>
              </Flex>
            </Box>
          </Collapse>
        </Box>
      </Flex>

    </Box>
  )
}

export default ExpandComp
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, Collapse, Flex, Grid, Heading, Icon, IconButton, Image, SkeletonCircle, SkeletonText, Spacer, Stack, Text, Tooltip, useToast } from '@chakra-ui/react'
import { Rating } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { FaMapLocationDot } from "react-icons/fa6";
import Imag from '../../images/tripadvisor.png'
import Imag1 from '../../images/money.png'
import { AiFillCheckCircle, AiFillHeart, AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const HotelsComp = ({ price, id, main_img, title, description, address, city, stars, reviews, places_see_img }) => {
  const [show, setShow] = useState(false)
  const [showImg, setShowImg] = useState(main_img)
  const [val, setval] = useState(0);
  const toast = useToast()
  const [wish, setwish] = useState(false)
  const spinner = useSelector(store => store.hotels.isSkeleton)
  const handleImageChange = (e) => {
    e.stopPropagation()
    let temp = e.target.src
    e.target.src = showImg
    setShowImg(temp)
  }
  const navigate = useNavigate()
  const goToDetails = () => {
    console.log("here")
    window.open(`/booking/${city}/1`, '_blank', 'noreferrer');
  }
  const goToMap = () => {

  }
  const addToWish = (e) => {
    e.stopPropagation()
    if (!wish) {
      toast({
        title: `${title} Added to WishList.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: `${title} Removed from Wishlist`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      })
    }
    setwish(!wish)
  }
  const handleToggle = (e) => {
    e.stopPropagation()
    setShow(!show)
  }
  if (spinner) return <Box padding='6' boxShadow='lg' bg='white'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  </Box>
  return (
    <Grid onClick={goToDetails} cursor="pointer">
      <Card
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}
        direction={{ base: 'column', md: 'row' }}
        overflow='hidden'
        variant='outline'
        p={5}
      >
        <Flex flexDirection="column" justifyContent="space-between" w={{ base: "100%", lg: "30%" }}>

          <Image
            objectFit='cover'
            w={{ base: "100%", lg: "300px" }}
            h="75%"
            maxH="190px"
            src={showImg}
            fallback="../../images/150.png"
            alt='Hotel'
            transition="0.5s"
            mb="10px"
          />
          <Box as="Flex" h={'20%'} overflow='hidden' w={'100%'} position={'relative'} flexDirection={"row"} >
            <IconButton w="15%" h="100%" left={'0%'} zIndex={'2'} onClick={(e) => { e.stopPropagation(); setval(val < -20 ? val + 40 : val) }} colorScheme='none' bg={'blackAlpha.300'} isDisabled={val > 5}
              icon={<AiOutlineCaretLeft size={'25px'} />} />
            <div style={{ height: '100%', display: 'flex', alignItems: "center", gap: "2px", translate: `${val}px 0px`, top: "0", position: "absolute", transition: '1s', width: "70%" }}>
              {places_see_img?.map((el, idx) => {
                return <Image transition="0.5s" onClick={handleImageChange} borderRadius={"5px"} key={idx} w={{ base: '120px', md: '80px' }} height='45px' src={el} fallback={"../../images/150.png"} />
              })}
            </div>
            <IconButton w="15%" h="100%" position="absolute" right={{ base: '25%', md: '0%' }} zIndex={'2'} onClick={(e) => { e.stopPropagation(); setval(val > -55 ? val - 35 : val) }} colorScheme='none' bg={'blackAlpha.300'} isDisabled={val < -80}
              icon={<AiOutlineCaretRight size={'25px'} />} />
          </Box>
        </Flex>
        <Stack w={{ base: "100%", lg: "70%" }}>
          <CardBody padding="5px 15px">
            <Flex flexDirection={{ base: "row", lg: "row" }} justifyContent="space-between">
              <Rating>
                {[...Array(Math.round(stars) || 4)].map((i, idx) => {
                  return <Rating.Star key={"i" + idx} />
                })}
                HOTEL
              </Rating>
              <Flex w='-webkit-fit-content' alignItems={'center'} gap="5px" p='5px 10px' bg='#ecfff2' borderRadius={5}>
                <Image src={Imag1} boxSize={"35px"} pt='5px' />
                <Text color={'black'} textDecoration={'dotted'}>₹{price}</Text>
              </Flex>
            </Flex>
            <Stack w={{ base: "100%", lg: "60%" }}>
              <Heading size='md'>{title}</Heading>
              <Tooltip colorScheme='white' bg="grey.200" label={<iframe title="map" width="300px" height="150" style={{ backgroundColor: "white" }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(address)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                <a href="https://www.maps.ie/population/">Find Population on Map</a>
              </iframe>}>
                <Text noOfLines={1} textDecoration="underline"><Icon textDecoration={"none"} mr="5px" as={FaMapLocationDot} color="cyan.200" boxSize="20px" />{address}</Text>
              </Tooltip>
            </Stack>
            <Collapse startingHeight={60} in={show}>
              <Text fontSize="13.5px">{description}</Text>
            </Collapse>
            <Button p="0" as={Link} bg="white" _hover={{ bg: "white" }} _focus={{}} size='sm' onClick={handleToggle}>
              Show {show ? 'Less' : 'More'}
              {show ? <ChevronUpIcon boxSize={6} /> : <ChevronDownIcon boxSize={6} />}
            </Button>
          </CardBody>

          <CardFooter display="flex" py="0" alignItems={"center"}>
            <Flex direction={'column'}>
              <Flex alignItems="center" gap="5px" bg="green.100" w='fit-content' px='10px' borderRadius={10}>
                <AiFillCheckCircle color="green" />
                Certified
              </Flex>
              <Flex gap="10px">
                <Image src={Imag} boxSize={"25px"} />
                <Text>{reviews} ratings</Text>
              </Flex>
            </Flex>
            <Spacer />
            <button className="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-cyan-200 via-cyan-500 to-cyan-200 bg-[length:400%_400%] p-0.5">
              <Link onClick={addToWish} className="border block rounded-md bg-cyan px-3 py-1 font-italic text-white"> Add to Wishlist <IconButton alignItems="flex-start" py="4px" display={{ base: "inline-flex", sm: "none", md: "inline-flex" }} rounded="full" size="sm" h={'35px'} w={'35px'} colorScheme='none' color={'blackAlpha.700'} icon={wish ? <AiFillHeart color={'red'} size={'22px'} transition="0.5s" /> : <AiOutlineHeart transition="0.5s" color={'white'} size={'22px'} />} /></Link>
            </button>

          </CardFooter>
        </Stack>
      </Card >
    </Grid >
  )
}

export default HotelsComp
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, Collapse, Flex, Grid, Heading, Icon, IconButton, Image, LinkBox, LinkOverlay, Spacer, Stack, Text, Tooltip, useToast } from '@chakra-ui/react'
import { Rating } from 'flowbite-react'
import { Link, redirect, useLinkClickHandler, useNavigate } from 'react-router-dom'
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillCheckCircle, AiFillHeart, AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineHeart } from 'react-icons/ai'
const HotelsComp = ({ id,main_img, title, description, address, secImg, stars, reviews }) => {
  const [show, setShow] = useState(false)
  const [showImg, setShowImg] = useState(main_img)
  const [val, setval] = useState(0);
  const places_see_img = [
    "https://media1.thrillophilia.com/filestore/a7odb4oqk8nfxuib6l7ntol9nij6_1555916896_shutterstock_219200257.jpg?w=auto&h=600",
    "https://media1.thrillophilia.com/filestore/ct0jg843d1d0o496qhz2bl6b6d72_1555917665_shutterstock_558396214.jpg?w=auto&h=600",
    "https://media1.thrillophilia.com/filestore/2vu9pulryfbqj6x3569wb7mm0u37_1550731893_scuba-diving-dubai.jpg?w=auto&h=600",
    "https://media1.thrillophilia.com/filestore/f4a7qvgaoutwzfn6jtne0zgveyp4_8461461602_8bf714cd59_b.jpg?w=auto&h=600"
  ]
  const toast = useToast()
  const [wish, setwish] = useState(false)
  const handleImageChange = (e) => {
    let temp = e.target.src
    e.target.src = showImg

    setShowImg(temp)
  }
  const navigate = useNavigate()
  const goToDetails = () => {
    console.log("here")
    navigate(`/booking/${id}`)
  }
  const goToMap = () => {

  }
  const addToWish = () => {
    if (!wish) {
      toast({
        title: 'Added to WishList.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Removed from Wishlist',
        status: 'info',
        duration: 3000,
        isClosable: true,
      })
    }
    setwish(!wish)
  }
  const handleToggle = () => setShow(!show)
  return (
    <Grid onClick={goToDetails} cursor="pointer">
      <Card
      _hover={{boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}}
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      p={5}
      >
      <Flex flexDirection="column" justifyContent="space-between" w="30%">

        <Image
          objectFit='cover'
          w="100%"
          h="80%"
          maxH="500px"
          src={showImg}
          fallback="../../images/150.png"
          alt='Hotel'
          transition="0.5s"
        />
        <Box as="Flex" h={'20%'} overflow='hidden' position={'relative'} flexDirection={"row"} >
          <IconButton w="15%" h="100%" left={'0%'} zIndex={'2'} onClick={() => { setval(val + 40) }} colorScheme='none' bg={'blackAlpha.300'} isDisabled={val > 5}
            icon={<AiOutlineCaretLeft size={'25px'} />} />
          <div style={{ height: '100%', display: 'flex', gap: "2px", translate: `${val}px 0px`, top: "0", position: "absolute", transition: '1s', width: "70%" }}>
            {places_see_img?.map((el, idx) => {
              return <Image transition="0.5s" onClick={handleImageChange} borderRadius={"5px"} key={idx} w={'80px'} height='100%' src={el} fallback={"../../images/150.png"} />
            })}
          </div>
          <IconButton w="15%" h="100%" position="absolute" right={'0%'} zIndex={'2'} onClick={() => { setval(val - 35) }} colorScheme='none' bg={'blackAlpha.300'} isDisabled={val < -80}
            icon={<AiOutlineCaretRight size={'25px'} />} />
        </Box>
      </Flex>
      <Stack w="70%">
        <CardBody padding="5px 15px">
          <Flex justifyContent="space-between">
            <Rating>
              {[...Array(Math.round(stars) || 4)].map((i, idx) => {
                return <Rating.Star key={"i" + idx} />
              })}
              HOTEL
              {/* ({adventures?.reviews} reviews) */}
            </Rating>
            <Flex gap="10px">
              <Image src="https://cdn-icons-png.flaticon.com/512/48/48942.png" boxSize={"25px"} />
              <Text>{reviews} ratings</Text>
            </Flex>
          </Flex>
          <Stack w="60%">
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
          <Flex alignItems="center" gap="5px" class="bg-green-300 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            <AiFillCheckCircle color="green" />
            Certified
          </Flex>
          <Spacer />
          <button class="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-cyan-200 via-cyan-500 to-cyan-200 bg-[length:400%_400%] p-0.5">
            <Link onClick={addToWish} class="border block rounded-md bg-cyan px-3 py-1 font-italic text-white"> Add to Wishlist <IconButton alignItems="flex-start" py="4px" display={{ base: "none", sm: "inline-flex" }} rounded="full" size="sm" h={'35px'} w={'35px'} colorScheme='none' color={'blackAlpha.700'} icon={wish ? <AiFillHeart color={'red'} size={'22px'} transition="0.5s" /> : <AiOutlineHeart transition="0.5s" color={'white'} size={'22px'} />} /></Link>
          </button>

        </CardFooter>
      </Stack>
    </Card >
    </Grid >
  )
}

export default HotelsComp
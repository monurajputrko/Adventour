import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex, HStack, Heading, IconButton, Image, SimpleGrid, Spacer, Tag, Text, useToast } from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineFieldTime, AiFillHeart } from "react-icons/ai";
import { MdStar, MdVerified } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from 'flowbite-react';
import Loader from '../Utils/Loader';
import { getHotel } from '../../redux/HotelReducer/action';
import SecondaryNav from './SecondaryNav';

export const HDetail = () => {
    const dispatch = useDispatch()
    const { city,idx } = useParams()
    const theme = useSelector(state => state.theme);
    const hotels = useSelector(state => state.hotels.hotels[idx - 1])
    const toast = useToast()
    const [val, setval] = useState(-10);
    const [wish, setwish] = useState(false)
    const isLoading = useSelector(store => store.hotels.isLoading)

    useEffect(() => {
        dispatch(getHotel(city))
        window.scrollTo({
            top: 0,
        });
    }, [])
    if (isLoading) return <Loader />
    return (
        <>
        <SecondaryNav />
        <Box bg={'white'} mb={{ base: "2em" }}>
            <Box m={'auto'} mt="20px" w={{ base: '100vw', lg: '76vw' }} bg="white" color={theme === "dark" ? 'white' : 'blackAlpha.800'} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
                <Image src={hotels?.main_img} boxShadow={'md'} width={{ base: '100%' }} h={{ base: '350px', lg: "500px" }} />


                <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row' }} bg="white" p="2% 10px" >
                    <Box textAlign={'left'} pl={'40px'} w={{ base: '90%', md: '70%', lg: '38%' }}>
                        <Heading size='lg' pb={'15px'}>{hotels?.title}</Heading>
                        <Text as="div" pb={'10px'}>
                            <strong> {hotels?.stars} stars</strong>
                            <Rating>
                                {[...Array(Math.round(hotels?.stars) || 3)].map((i, idx) => {
                                    return <Rating.Star key={"i" + idx} />
                                })}
                                ({hotels?.reviews} reviews)
                            </Rating>
                        </Text>
                        <Box w={'80%'} mb={'15px'}>
                            {hotels?.utils?.map((style, idx) => {
                                return <Tag key={idx} mr={'10px'} mb="15px" pb="5px" color={"white"} bg='black'>{style}</Tag>
                            })}
                        </Box>
                        <Box>

                            <SimpleGrid templateColumns='repeat(2, 1fr)' w={{ base: '100%', lg: '70%' }} gap={1} mb={{ base: '10px', lg: '0' }}>
                                <Text border={'1px solid black'} textAlign={'center'}><strong>Check In</strong><br />15/08/2023</Text>
                                <Text border={'1px solid black'} textAlign={'center'}><strong>Check Out</strong><br />20/08/2023</Text>
                            </SimpleGrid >
                        </Box>
                    </Box>
                    <Box h={'300px'} borderRadius={'20px'} overflow='hidden' position={'relative'} w={{ base: '100%', md: '100%', lg: '60%' }}>
                        <IconButton borderRadius={'50%'} h={'40px'} position={'absolute'} top={'42%'} left={'0%'} zIndex={'2'} onClick={() => { setval(val + 300) }} colorScheme='none' bg={'blackAlpha.700'} isDisabled={val === -10}
                            icon={<AiOutlineCaretLeft size={'20px'} />} />
                        <IconButton borderRadius={'50%'} h={'40px'} position={'absolute'} top={'42%'} right={'0%'} zIndex={'2'} onClick={() => { setval(val - 300) }} colorScheme='none' bg={'blackAlpha.700'} isDisabled={val < -800}
                            icon={<AiOutlineCaretRight size={'20px'} />} />
                        <div style={{ height: '100%', display: 'flex', translate: `${val}px 0px`, transition: '1s' }}>
                            {hotels?.places_see_img?.map((el, idx) => {
                                return <Image key={idx} borderRadius={'10px'} p={'10px'} w={'400px'} height='100%' src={el} />
                            })}
                        </div>
                    </Box>

                </Flex>

                <Flex mt={'20px'} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} p="25px" justifyContent="space-around" bg="cyan.100" >

                    <Flex direction={'column'} textAlign={'left'} lineHeight={'30px'} color="grey.900" p="0 1%">
                        <Text pb={'20px'} fontSize='2xl' fontWeight={'600'}>About Hotel</Text>
                        {hotels?.about?.map((text, idx) => {
                            return <Flex align={'center'} key={idx} pb={'10px'}><MdStar size="20px" /> <Text pl={'10px'} fontSize='lg'>{text}</Text></Flex>
                        })}
                    </Flex>
                    <div>

                        <Flex bg={theme === "dark" ? '#191b1d' : 'white'} direction={'column'} w={{ base: '100%', md: '100%', lg: '350px' }} boxShadow={'md'} border={'1px solid silver'} p={'20px'} mt={{ base: '40px', md: '10px' }} ml={{ base: '0px', md: '0px', lg: '40px' }} borderRadius={'10px'}>
                            <Flex w={{ base: '100%', md: '100%', lg: '300px' }}>
                                <Text><s>From ₹{(hotels?.price + 5000)?.toLocaleString("en-US")}</s> </Text><Spacer /> <Tag className="pulse" colorScheme='cyan.200' bg="pink.800" color={'white'}>-{hotels?.off}%</Tag>
                            </Flex>
                            <Text w={{ base: '100%', md: '100%', lg: '300px' }} textAlign={'left'} fontSize='4xl' fontWeight={'700'}>₹{(hotels?.price)?.toLocaleString("en-US")}</Text>
                            <Text w={{ base: '100%', md: '100%', lg: '300px' }} textAlign={'left'} fontSize='sm' fontWeight={'500'}>per person</Text>
                            <Flex mb={'20px'} w={{ base: '100%', md: '100%', lg: '300px' }} alignItems={'center'} pt={'10px'} pb={'10px'}>
                                <Link><Button fontSize={'16px'} h={'45px'} w={'230px'} colorScheme='none' fontWeight={'700'} bg={theme === "dark" ? "#3DC6EF" : "cyan.200"} color={'white'} borderRadius={'5px'}>Add to Bookings</Button></Link>
                                <Spacer />
                                <IconButton display={{ base: "none", sm: "inline-flex" }} onClick={() => {
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
                                }} rounded="full" size="md" boxShadow={'md'} h={'40px'} w={'45px'} shadow='md' colorScheme='none' color={'blackAlpha.700'} icon={wish ? <AiFillHeart color={'red'} size={'30px'} /> : <AiOutlineHeart color={'teal'} size={'30px'} />} />
                            </Flex>
                            <Flex pb={'20px'}><AiOutlineFieldTime size={'25px'} /><Text lineHeight={'20px'} w={{ base: '100%', md: '100%', lg: '85%' }} pl={'10px'} textAlign={'left'}>Pay over time with smaller, interest-free instalments. <Link> Learn More</Link></Text></Flex>
                            <Flex ><MdOutlineVerified size={'25px'} /><Text lineHeight={'20px'} w={{ base: '100%', md: '100%', lg: '85%' }} pl={'10px'} textAlign={'left'}>Book once and share the cost with split payments.<Link> Learn More</Link></Text></Flex>
                        </Flex>

                    </div>
                </Flex>

                <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: '1em' }} mt={'10px'} textAlign={'left'} bg="white" p="4%">
                    <Flex direction={{ base: 'column' }} w='45%'>
                        <HStack pb={'20px'}><Text fontSize={'25px'} fontWeight={'600'}>What's Included</Text></HStack>
                        <SimpleGrid pl={'10px'} minChildWidth={"200px"} columns={2}>
                            <HStack><MdVerified /><Text>Accommodation</Text></HStack>
                            <HStack><MdVerified /><Text>Guide</Text></HStack>
                            <HStack><MdVerified /><Text>Meals</Text></HStack>
                            <HStack><MdVerified /><Text>Additional Services</Text></HStack>
                            <HStack><MdVerified /><Text>Transport</Text></HStack>
                            <HStack><MdVerified /><Text>Flights</Text></HStack>
                            <HStack><MdVerified /><Text>Insurance</Text></HStack>
                            <HStack><MdVerified /><Text>Additional Services</Text></HStack>
                        </SimpleGrid>
                    </Flex>
                    <Spacer />
                    <Box w={{ base: '100%', lg: '40%' }}>
                        <iframe title="map" width={'100%'} height="250" style={{ backgroundColor: "white" }} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(hotels?.address)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                            <a href="https://www.maps.ie/population/">Find Population on Map</a>
                        </iframe>
                    </Box>
                </Flex>
                <Divider borderColor="black" />

                <Divider borderColor="black" />
                <Flex justifyContent="space-between" p="30px" flexDirection={{ base: "column", lg: "row" }}>
                    {hotels?.feedback?.map(f => {
                        return <Flex flexDirection="column" w={{ base: "100%", md: "45%" }} p="10px">
                            <div className="flex items-center mb-4 space-x-4">
                                <img className="w-10 h-10 rounded-full" src={f?.img} alt="" />
                                <div className="space-y-1 font-medium dark:text-white">
                                    <p>{f.name} <time className="block text-sm text-gray-500 dark:text-gray-400">Joined on {f.date_joined}</time></p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1">
                                {[...Array(Math.round(f?.stars) || 3)].map((i, idx) => {
                                    return <img src="https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry-thumbnail.png" height="20px" width="20px" alt="star"/>
                                })}
                                <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Must have Experience!</h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in {f?.place} on <time>{f.date_joined}</time></p></footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{f?.desc1}</p>
                            <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                            <aside>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{Math.floor(Math.random()*1000)} people found this helpful</p>
                                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                    <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                    <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                                </div>
                            </aside>
                        </Flex>
                    })}
                </Flex>
            </Box>
        </Box>
    </>
    )
}

export default HDetail
import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex, HStack, Heading, IconButton, Image, SimpleGrid, Spacer, Tag, Text, useToast } from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineFieldTime, AiFillHeart } from "react-icons/ai";
import { RiFileCopy2Line } from "react-icons/ri";
import { MdGroup, MdStar, MdVerified } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import { MdOutlineTipsAndUpdates, MdOutlineVerified } from "react-icons/md";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAdventure } from '../../redux/AdventureReducer/action';
import { Rating } from 'flowbite-react';
import { FaClipboardList } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Loader from '../Utils/Loader';
export const ADetail = () => {
    const dispatch = useDispatch()
    const { idx } = useParams()
    console.log(idx)
    const theme = useSelector(state => state.theme);
    const adventures = useSelector(state => state.adventures.adventures[idx - 1])
    console.log(adventures)
    const toast = useToast()
    const [val, setval] = useState(-10);
    const [wish, setwish] = useState(false)
    const isLoading = useSelector(store => store.adventures.isLoading)
    useEffect(() => {
        dispatch(getAdventure())
        window.scrollTo({
            top: 0,
        });
    }, [])
    if (isLoading) return <Loader />
    return (
        <Box bgColor={theme === "dark" ? '#101214' : '#fbfbfb'} mb={{ base: "2em" }}>
            {/* <Toggle  /> */}
            {/* <Detailnav/> */}


            <Image src={adventures?.main_image} boxShadow={'md'} width={{ base: '100vw' }} h={{ base: '350px', lg: "500px" }} />
            <Box m={'auto'} pt={'20px'} w={{ base: '90vw', md: '76vw', lg: '76vw' }} bg="white" color={theme === "dark" ? 'white' : 'blackAlpha.800'}>


                <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row' }} bg="white" p="2% 10px" >
                    <Box textAlign={'left'} pl={'40px'} w={{ base: '90%', md: '70%', lg: '38%' }}>
                        <Heading size='lg' pb={'15px'}>{adventures?.title}</Heading>
                        <Text as="div" pb={'10px'}>
                            <strong> Duration : {adventures?.tour_length} • {adventures?.rating} stars</strong>
                            <Rating>
                                {[...Array(Math.round(adventures?.rating) || 4)].map((i, idx) => {
                                    return <Rating.Star key={"i" + idx} />
                                })}
                                ({adventures?.reviews} reviews)
                            </Rating>
                        </Text>
                        <Text pb={'15px'}>From <strong>Persian Gulf</strong> to <strong>Jumeirah Beach</strong></Text>
                        <Box w={'80%'} mb={'15px'}>
                            {adventures?.travel_style?.map((style, idx) => {
                                return <Tag key={idx} mr={'10px'} mb="15px" pb="5px" color={theme === "dark" ? 'blackAlpha.800' : 'whiteAlpha.900'} bg='cyan.300'>{style}</Tag>
                            })}
                        </Box>
                        <Box>

                            <SimpleGrid templateColumns='repeat(2, 1fr)' gap={1}>
                                <Text><strong>Tour Operator:</strong><br />Dubai Emirates Co.</Text>
                                <Text><strong>Max group size:</strong><br />{adventures?.group_size}</Text>
                                <Text><strong>Age range:</strong><br />{adventures?.age_range} yrs</Text>
                                <Text><strong>Operated in:</strong><br />English</Text>
                            </SimpleGrid >
                        </Box>
                    </Box>
                    <Box h={'300px'} borderRadius={'20px'} overflow='hidden' position={'relative'} w={{ base: '100%', md: '100%', lg: '60%' }}>
                        <IconButton borderRadius={'50%'} h={'40px'} position={'absolute'} top={'42%'} left={'0%'} zIndex={'2'} onClick={() => { setval(val + 300) }} colorScheme='none' bg={'blackAlpha.700'} isDisabled={val === -10}
                            icon={<AiOutlineCaretLeft size={'20px'} />} />
                        <IconButton borderRadius={'50%'} h={'40px'} position={'absolute'} top={'42%'} right={'0%'} zIndex={'2'} onClick={() => { setval(val - 300) }} colorScheme='none' bg={'blackAlpha.700'} isDisabled={val < -800}
                            icon={<AiOutlineCaretRight size={'20px'} />} />
                        <div style={{ height: '100%', display: 'flex', translate: `${val}px 0px`, transition: '1s' }}>
                            {adventures?.places_see_img?.map((el, idx) => {
                                return <Image key={idx} borderRadius={'10px'} p={'10px'} w={'400px'} height='100%' src={el} />
                            })}
                        </div>
                    </Box>

                </Flex>
                {/* <Box>
                    <div style={{ width: "60%" }}>
                        <iframe title="map" width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vietnam%20Railway%20Station+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/population/">Find Population on Map</a>
                        </iframe>
                    </div>
                </Box> */}

                <Flex mt={'20px'} flexDirection={{ base: 'column', md: 'column', lg: 'row' }} p="25px" justifyContent="space-around" bg="cyan.100" >


                    <Flex direction={'column'} textAlign={'left'} lineHeight={'30px'} color="grey.900" p="0 1%">
                        <Text pb={'20px'} fontSize='2xl' fontWeight={'600'}>Highlights</Text>
                        {adventures?.highlights?.map((text, idx) => {
                            return <HStack key={idx} pb={'10px'}><MdStar size="25px" /> <Text pl={'10px'} fontSize='lg'>{text}</Text></HStack>
                        })}
                    </Flex>
                    <div>

                        <Flex bg={theme === "dark" ? '#191b1d' : 'white'} direction={'column'} w={{ base: '100%', md: '100%', lg: '350px' }} boxShadow={'md'} border={'1px solid silver'} p={'20px'} mt={{ base: '40px', md: '10px' }} ml={{ base: '0px', md: '0px', lg: '40px' }} borderRadius={'10px'}>
                            <Flex w={{ base: '100%', md: '100%', lg: '300px' }}>
                                <Text><s>From ₹{(adventures?.str_price)?.toLocaleString("en-US")}</s> </Text><Spacer /> <Tag className="pulse" colorScheme='cyan.200' bg="pink.800" color={'white'}>-{adventures?.off}%</Tag>
                            </Flex>
                            <Text w={{ base: '100%', md: '100%', lg: '300px' }} textAlign={'left'} fontSize='4xl' fontWeight={'700'}>₹{(adventures?.act_price)?.toLocaleString("en-US")}</Text>
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
                    <Flex direction={{ base: 'column' }}>
                        <Text mb={'35px'} fontSize={'25px'} fontWeight={'500'}>Ready-to-book adventures, personalized</Text>
                        <Flex direction={{ base: "column" }} w={{ base: "100%", lg: '80%' }} lineHeight={'25px'} spacing={'20px'}>
                            <Flex>
                                <RiFileCopy2Line size={'25px'} />
                                <Text pl={'18px'}><strong>Personal</strong><br />Make your adventure more you </Text>
                            </Flex>
                            <Flex>
                                <MdGroup size={'25px'} />
                                <Text pl={'18px'}><strong>Private</strong><br />Enjoy a tour focused solely on your travel group </Text>
                            </Flex>
                            <Flex>
                                <MdOutlineTipsAndUpdates size={'25px'} />
                                <Text pl={'18px'}><strong>Professional</strong><br />Access our Travel Experts’ insider knowledge</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Spacer />
                    <Box w={{base:'100%',lg:'50%'}}>
                        <iframe title="map" width={'100%'} height="250" style={{ backgroundColor: "white" }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(adventures?.places_see_name + "," + adventures?.destination)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                            <a href="https://www.maps.ie/population/">Find Population on Map</a>
                        </iframe>
                    </Box>
                </Flex>
                <Divider borderColor="black" />
                <Flex direction={'column'} pb={'30px'} lineHeight={'50px'} w="100%" bg="white" p="4%" pt="1%">
                    <HStack pb={'20px'}><Text fontSize={'25px'} fontWeight={'600'}>What's Included</Text></HStack>
                    <SimpleGrid pl={'10px'} minChildWidth={"200px"} columns={4}>
                        <HStack><MdVerified /><Text>Accommodation</Text></HStack>
                        <HStack><MdVerified /><Text>Guide</Text></HStack>
                        <HStack><MdVerified /><Text>Meals</Text></HStack>
                        <HStack><MdVerified /><Text>Additional Services</Text></HStack>
                        <HStack><MdVerified /><Text>Transport</Text></HStack>
                        <HStack><MdVerified /><Text>Flights</Text></HStack>
                        <HStack><MdVerified /><Text>Insurance</Text></HStack>
                        <HStack><MdVerified /><Text>Optional</Text></HStack>
                        <HStack><MdVerified /><Text>Additional Services</Text></HStack>
                    </SimpleGrid>
                </Flex>
                <Divider borderColor="black" />
                <Flex justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }}>
                    <Flex w={{ base: "100%", md: "50%" }} direction={'column'} p="2% 4%">
                        <Text textAlign={'left'} fontSize={'25px'} fontWeight={'600'} pb={'25px'}>Customer Reviews</Text>
                        <HStack shadow='md' bg={theme === "dark" ? 'gray.900' : 'blue.100'} mb={'2px'} px={'20px'} py={'10px'}>
                            <HStack textAlign={'left'}><BsStars /><Text>Overall Rating<br />Excellent</Text></HStack>
                            <Spacer />
                            <Rating>
                                {[...Array(Math.round(Math.floor(adventures?.rating)) || 4)].map((i, idx) => {
                                    return <Rating.Star key={"j" + idx} />
                                })}
                                ({adventures?.reviews} reviews)
                            </Rating>
                        </HStack>

                        <SimpleGrid columns={{ base: '1', md: '1', lg: '2' }} gap={'2px'}>
                            {adventures?.user_ratings?.map(((ele, idx) => {
                                return <HStack key={idx} bg={theme === "dark" ? '#191b1d' : 'white'} shadow='md' px={'20px'} py={'5px'} w={'100%'}>
                                    <HStack textAlign={'left'}><FaClipboardList /><Text>{ele.title}<br />{ele.ratings > 4.5 ? "Excellent" : "Good"}</Text></HStack>
                                    <Spacer />
                                    <Text>{ele.ratings} ⭐</Text>
                                </HStack>
                            }))}
                        </SimpleGrid>
                    </Flex>
                    <Flex flexDirection="column" w={{ base: "100%", md: "50%" }} p="1em">
                        <div className="flex items-center mb-4 space-x-4">
                            <img className="w-10 h-10 rounded-full" src="https://mixingimages.in/wp-content/uploads/2023/03/WhatsApp-DP.jpg" alt="" />
                            <div className="space-y-1 font-medium dark:text-white">
                                <p>Jese Leos <time className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                            </div>
                        </div>
                        <div className="flex items-center mb-1">
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Must have Experience!</h3>
                        </div>
                        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time>March 3, 2017</time></p></footer>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">The marines have always been my fantasy and I could not miss the Dubai scuba diving experience for anything. Adventour helped me get the booking done with ease. Demonstrated, checked and we went down into the blue world!</p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Once the green signal issued, we dived deeper and saw amazing nautical sights that we can’t describe in words, also the feeling of weightlessness is great. You can dive up to 60 ft. </p>
                        <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                        <aside>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                            <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                            </div>
                        </aside>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default ADetail
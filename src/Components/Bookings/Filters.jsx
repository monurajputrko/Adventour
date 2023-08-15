import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, IconButton, Input, Show, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Spacer, Stack, Switch, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { filterHotel } from '../../redux/HotelReducer/action'
import { useParams } from 'react-router-dom'

const Filters = () => {
    const [sliderValue, setSliderValue] = React.useState(0)
    const [showTooltip, setShowTooltip] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    const { city } = useParams()
    let q = '';
    const handleCheckbox = (e) =>{
        let temp;
        switch(e.target.value){
            case 'free' : temp = 'q=flexible&'
            break;
            case 'book1' : temp = 'id_ne=2&id_ne=5&'
            break;
            case 'pay_at_hotel' : temp = 'id_ne=1&id_ne=3&'
            break;
            case 'free_break' : temp = 'q=breakfast&'
            break;
            default : temp=''
        }
        q+=temp
        q = q.substring(0,q.length-1)
        dispatch(filterHotel(city,q))
    }
    const handleSwitch = (e) =>{
        let temp = e.target.checked ? 'assured=true&' : 'assured=false&'
        dispatch(filterHotel(city,temp))
    }
    const handleRating = (e) =>{
        let temp = 'stars_gte='+e.target.value
        dispatch(filterHotel(city,temp))
    }
    let timeout;
    const changeSlider = (v) =>{
        setSliderValue(v)
        let temp = 'price_lte='+v
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(()=>{
            dispatch(filterHotel(city,temp))
        },1000)
    }
    return <>
        <Show breakpoint='(max-width: 995px)'>
            <IconButton ref={btnRef} w="20px" size={'sm'} bg="cyan.100" borderRadius={"0px"} colorScheme='cyan' color="white" position="absolute" top='0' zIndex={5} onClick={onOpen} icon={<HamburgerIcon />} />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color="white" mt="8px" />
                    <DrawerHeader className="animate-border inline-block text-white bg-white bg-gradient-to-r from-cyan-500 via-teal-200 to-cyan-500 bg-[length:400%_400%] p-0.5">Filters</DrawerHeader>

                    <DrawerBody p="15px 10px">
                        <Accordion allowToggle defaultIndex={0}>
                            <AccordionItem borderY="none">
                                <AccordionButton _hover={{}} border="5px double teal" borderRadius={"5px 5px 0 0"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                    <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                        Popular Filters
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                        <Stack spacing={[1, 2]} direction={['row', 'column']}>
                                            <Checkbox value='free' fontSize={"10px"} onChange={handleCheckbox}>Free Cancellation Available</Checkbox>
                                            <Checkbox value='book1' onChange={handleCheckbox}>Book @1</Checkbox>
                                            <Checkbox value='pay_at_hotel' onChange={handleCheckbox}>Pay at Hotel Available</Checkbox>
                                            <Checkbox value='free_break' onChange={handleCheckbox}>Free Breakfast Included</Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                        <Accordion mt="20px" allowToggle defaultIndex={0}>
                            <AccordionItem borderY="none">
                                <AccordionButton _hover={{}} border="5px double teal" borderRadius={"5px 5px 0 0"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                    <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                        Price Range
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={10} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                    <Slider
                                        id='slider'
                                        defaultValue={0}
                                        min={0}
                                        max={50000}
                                        colorScheme='teal'
                                        onChange={changeSlider}
                                        onMouseEnter={() => setShowTooltip(true)}
                                        onMouseLeave={() => setShowTooltip(false)}
                                    >
                                        <SliderMark value={6999} my='2' ml='-2.5' fontSize='sm'>
                                            ₹6999
                                        </SliderMark>
                                        <SliderMark value={19999} my='2' ml='-2.5' fontSize='sm'>
                                            ₹20999
                                        </SliderMark>
                                        <SliderMark value={35000} my='2' ml='-2.5' fontSize='sm'>
                                            ₹35000+
                                        </SliderMark>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <Tooltip
                                            hasArrow
                                            bg='teal.500'
                                            color='white'
                                            placement='top'
                                            isOpen={showTooltip}
                                            label={`${sliderValue}`}
                                        >
                                            <SliderThumb><Box as={MdGraphicEq} color="teal" /></SliderThumb>
                                        </Tooltip>
                                    </Slider>
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                        <Accordion mt="20px" allowToggle defaultIndex={0}>
                            <AccordionItem borderY="none">
                                <AccordionButton _hover={{}} border="5px double teal" borderRadius={"5px 5px 0 0"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                    <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                        Customer Rating
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                        <SimpleGrid columns="1" gap="10px">
                                            <Checkbox value='4.5' fontSize={"10px"} onChange={handleRating}>
                                                <Text py="1px" fontSize="14px" bg="green" color="white" px="10px" >4.5+</Text>
                                            </Checkbox>
                                            <Checkbox value='4' onChange={handleRating}>
                                                <Text bg="teal.500" fontSize="14px" color="white" px="10px" py="1px">4+</Text>
                                            </Checkbox>
                                            <Checkbox value='3.5' onChange={handleRating}>
                                                <Text py="1px" fontSize="14px" bg="green.300" color="white" px="10px">3.5+</Text>
                                            </Checkbox>
                                            <Checkbox value='3' onChange={handleRating}>
                                                <Text py="1px" fontSize="14px" bg="orange" color="white" px="10px" >3+</Text>
                                            </Checkbox>
                                        </SimpleGrid>
                                    </CheckboxGroup>
                                    <FormControl display='flex' alignItems='center' mt="5px">
                                        <FormLabel htmlFor='email-alerts' mb='0' fontSize={"14px"} fontWeight={400} color="teal">
                                            Adventour Assured :
                                        </FormLabel>
                                        <Switch id='assured' size="sm" colorScheme='teal' onChange={handleSwitch} />
                                    </FormControl>
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Show>
        <Show breakpoint='(min-width: 996px)'>
            <Flex w="22vw" p="2% 0" mt="10px" h="94vh" borderRadius="10px" bg="cyan.100" color="white" position="fixed" z-index="20" >
                <Accordion w="100%" allowToggle defaultIndex={0}>
                    <AccordionItem >
                        <AccordionButton _hover={{}} borderRadius="0" className="animate-border inline-block rounded-md text-white bg-white bg-gradient-to-r from-cyan-500 via-teal-200 to-cyan-500 bg-[length:400%_400%] p-0.5">
                            <Box as="span" flex='1' textAlign='center' fontWeight="600" fontSize="22px">
                                Filters
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel py="20px" px="25px">
                            <Accordion allowToggle defaultIndex={0}>
                                <AccordionItem borderY="none">
                                    <AccordionButton _hover={{}} borderRadius={"0"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                        <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                            Popular Filters
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack spacing={[1, 2]} direction={['row', 'column']}>
                                                <Checkbox value='free' fontSize={"10px"} name="popular" onChange={handleCheckbox}>Free Cancellation Available</Checkbox>
                                                <Checkbox value='book1' name="popular" onChange={handleCheckbox}>Book @1</Checkbox>
                                                <Checkbox value='pay_at_hotel' name="popular" onChange={handleCheckbox}>Pay at Hotel Available</Checkbox>
                                                <Checkbox value='free_break' name="popular" onChange={handleCheckbox}>Free Breakfast Included</Checkbox>
                                            </Stack>
                                        </CheckboxGroup>
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>
                            <Accordion mt="20px" allowToggle defaultIndex={0}>
                                <AccordionItem borderY="none">
                                    <AccordionButton _hover={{}} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                        <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                            Price Range
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={10} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                        <Slider
                                            id='slider'
                                            defaultValue={0}
                                            min={0}
                                            max={50000}
                                            colorScheme='teal'
                                            onChange={changeSlider}
                                            onMouseEnter={() => setShowTooltip(true)}
                                            onMouseLeave={() => setShowTooltip(false)}
                                        >
                                            <SliderMark value={6999} my='2' ml='-2.5' fontSize='sm'>
                                                ₹7k
                                            </SliderMark>
                                            <SliderMark value={19999} my='2' ml='-2.5' fontSize='sm'>
                                                ₹21k
                                            </SliderMark>
                                            <SliderMark value={35000} my='2' ml='-2.5' fontSize='sm'>
                                                ₹35k+
                                            </SliderMark>
                                            <SliderTrack>
                                                <SliderFilledTrack />
                                            </SliderTrack>
                                            <Tooltip
                                                hasArrow
                                                bg='teal.500'
                                                color='white'
                                                placement='top'
                                                isOpen={showTooltip}
                                                label={`${sliderValue}`}
                                            >
                                                <SliderThumb><Box as={MdGraphicEq} color="teal" /></SliderThumb>
                                            </Tooltip>
                                        </Slider>
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>
                            <Accordion mt="20px" allowToggle defaultIndex={0}>
                                <AccordionItem borderY="none">
                                    <AccordionButton _hover={{}} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                        <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                            Customer Rating
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <SimpleGrid columns="1" gap="10px">
                                                <Checkbox value='4.5' fontSize={"10px"} onChange={handleRating}>
                                                    <Text py="1px" fontSize="14px" bg="green" color="white" px="10px" >4.5+</Text>
                                                </Checkbox>
                                                <Checkbox value='4' onChange={handleRating}>
                                                    <Text bg="teal.500" fontSize="14px" color="white" px="10px" py="1px">4+</Text>
                                                </Checkbox>
                                                <Checkbox value='3.5' onChange={handleRating}>
                                                    <Text py="1px" fontSize="14px" bg="green.300" color="white" px="10px">3.5+</Text>
                                                </Checkbox>
                                                <Checkbox value='3' onChange={handleRating}>
                                                    <Text py="1px" fontSize="14px" bg="orange" color="white" px="10px" >3+</Text>
                                                </Checkbox>
                                            </SimpleGrid>
                                        </CheckboxGroup>
                                        <FormControl display='flex' alignItems='center' mt="5px">
                                            <FormLabel htmlFor='email-alerts' mb='0' fontSize={"14px"} fontWeight={600} color="teal">
                                                Adventour Certified :
                                            </FormLabel>
                                            <Switch id='assured' size="sm" colorScheme='teal' onChange={handleSwitch}/>
                                        </FormControl>
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Show>
    </>
}

export default Filters
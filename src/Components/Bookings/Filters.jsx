import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, CheckboxGroup, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, IconButton, Input, Show, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Spacer, Stack, Switch, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import { Badge } from 'flowbite-react'
import { MdGraphicEq } from 'react-icons/md'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Filters = ({ showSpinner }) => {
    const [sliderValue, setSliderValue] = React.useState(6999)
    const [showTooltip, setShowTooltip] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return <>
        <Show breakpoint='(max-width: 995px)'>
            <IconButton ref={btnRef} w="30px" borderRadius={"5px 5px 0 0"} mt="15px" colorScheme='cyan' color="white" position="fixed" zIndex={5} onClick={onOpen} icon={<HamburgerIcon />} />
            <Box h="98vh" mt="52px" w="40px" position="fixed" bg="#0bc5ea" zIndex={5}></Box>
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
                                            <Checkbox value='free' fontSize={"10px"}>Free Cancellation Available</Checkbox>
                                            <Checkbox value='book1' >Book @1</Checkbox>
                                            <Checkbox value='pay_at_hotel'>Pay at Hotel Available</Checkbox>
                                            <Checkbox value='free_break'>Free Breakfast Included</Checkbox>
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
                                        defaultValue={10000}
                                        min={0}
                                        max={50000}
                                        colorScheme='teal'
                                        onChange={(v) => setSliderValue(v)}
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
                                            <Checkbox value='4.5' fontSize={"10px"}>
                                                <Text py="1px" fontSize="14px" bg="green" color="white" px="10px" >4.5+</Text>
                                            </Checkbox>
                                            <Checkbox value='4' >
                                                <Text bg="teal.500" fontSize="14px" color="white" px="10px" py="1px">4+</Text>
                                            </Checkbox>
                                            <Checkbox value='3.5'>
                                                <Text py="1px" fontSize="14px" bg="green.300" color="white" px="10px">3.5+</Text>
                                            </Checkbox>
                                            <Checkbox value='3'>
                                                <Text py="1px" fontSize="14px" bg="orange" color="white" px="10px" >3+</Text>
                                            </Checkbox>
                                        </SimpleGrid>
                                    </CheckboxGroup>
                                    <FormControl display='flex' alignItems='center' mt="5px">
                                        <FormLabel htmlFor='email-alerts' mb='0' fontSize={"14px"} fontWeight={400} color="teal">
                                            Adventour Assured :
                                        </FormLabel>
                                        <Switch id='assured' onChange={showSpinner} size="sm" colorScheme='teal' />
                                    </FormControl>
                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Show>
        <Show breakpoint='(min-width: 996px)'>
            <Flex w="22vw" p="2% 0" mt="10px" h="97vh" borderRadius="10px" bg="cyan.100" color="white" position="fixed" z-index="20" >
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
                                    <AccordionButton _hover={{}} border="5px double teal" borderRadius={"5px 5px 0 0"} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" bg="cyan.200" fontWeight={600}  >
                                        <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                            Popular Filters
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4} bg="#f8fffe" borderRadius={"0 0 5px 5px"} color="black">
                                        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                            <Stack spacing={[1, 2]} direction={['row', 'column']}>
                                                <Checkbox value='free' fontSize={"10px"}>Free Cancellation Available</Checkbox>
                                                <Checkbox value='book1' >Book @1</Checkbox>
                                                <Checkbox value='pay_at_hotel'>Pay at Hotel Available</Checkbox>
                                                <Checkbox value='free_break'>Free Breakfast Included</Checkbox>
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
                                            defaultValue={10000}
                                            min={0}
                                            max={50000}
                                            colorScheme='teal'
                                            onChange={(v) => setSliderValue(v)}
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
                                                <Checkbox value='4.5' fontSize={"10px"}>
                                                    <Text py="1px" fontSize="14px" bg="green" color="white" px="10px" >4.5+</Text>
                                                </Checkbox>
                                                <Checkbox value='4' >
                                                    <Text bg="teal.500" fontSize="14px" color="white" px="10px" py="1px">4+</Text>
                                                </Checkbox>
                                                <Checkbox value='3.5'>
                                                    <Text py="1px" fontSize="14px" bg="green.300" color="white" px="10px">3.5+</Text>
                                                </Checkbox>
                                                <Checkbox value='3'>
                                                    <Text py="1px" fontSize="14px" bg="orange" color="white" px="10px" >3+</Text>
                                                </Checkbox>
                                            </SimpleGrid>
                                        </CheckboxGroup>
                                        <FormControl display='flex' alignItems='center' mt="5px">
                                            <FormLabel htmlFor='email-alerts' mb='0' fontSize={"14px"} fontWeight={400} color="teal">
                                                Adventour Assured :
                                            </FormLabel>
                                            <Switch id='assured' onChange={showSpinner} size="sm" colorScheme='teal' />
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
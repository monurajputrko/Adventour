import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Divider, Flex, Stack } from '@chakra-ui/react'

import React from 'react'

const Filters = () => {
    return <Flex w="20vw" p="2% 0" mt="10px" borderRadius="10px" bg="#007286" color="white" height="97vh" position="fixed" >
        <Accordion w="100%" allowToggle defaultIndex={0}>
            <AccordionItem >
                <AccordionButton _hover={{}} className="animate-border inline-block rounded-md text-white bg-white bg-gradient-to-r from-teal-700 via-teal-300 to-teal-700 bg-[length:400%_400%] p-0.5">
                    <Box as="span" flex='1' textAlign='center' fontWeight="600" fontSize="22px">
                        Filters
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <Accordion allowMultiple>
                        <AccordionItem borderY="1px solid black">
                            <AccordionButton borderRadius={"15px 15px 0 0"}>
                                <Box as="h2" fontWeight={600} flex='1' textAlign='left'>
                                    Popular Filters
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} bg="#f8fffe" borderRadius={"0 0 15px 15px"} color="black">
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
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Flex>
}

export default Filters
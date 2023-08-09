import React, { useState } from 'react'
import * as C from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

const SecondaryNav = () => {
    const handleChange = (e) =>{
        console.log(e.target.value)
    }
  return (
  <C.Flex p="10px 7%" color={'white'} bg="cyan.100" gap="1em" alignItems="center">
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
  )
}
{/* <C.FormControl>
        <C.FormLabel color="cyan.600">Info</C.FormLabel>
        <PopoverForm />
    </C.FormControl> */}
const TextInput = React.forwardRef((props, ref) => {
    return (
      <C.FormControl>
        <C.FormLabel htmlFor={props.id}>{props.label}</C.FormLabel>
        <C.Input ref={ref} id={props.id} {...props} />
      </C.FormControl>
    )
  })
  
  // 2. Create the form
  const Form = ({ firstFieldRef, onCancel }) => {
    const [obj, setObj] = useState({ rooms: 0, guests: 0 })
    const handleChange = (value) => setObj({ ...obj, guests: value })
  
    return (
      <C.Stack spacing={4}>
        <C.Heading size="md">Details</C.Heading>
        <C.Flex alignItems="center" justify="space-between">
          <C.FormLabel color="cyan.600">No. Of Rooms</C.FormLabel>
          <C.NumberInput maxW='100px' mr='2rem' value={obj.rooms} onChange={handleChange}>
            <C.NumberInputField />
            <C.NumberInputStepper>
              <C.NumberIncrementStepper />
              <C.NumberDecrementStepper />
            </C.NumberInputStepper>
          </C.NumberInput>
        </C.Flex>
        <C.Flex gep="1em">
          <C.FormLabel marginRight="5px" color="cyan.600">No. Of Guests</C.FormLabel>
          <C.Slider
            flex='1'
            focusThumbOnChange={false}
            value={obj.guests}
            onChange={handleChange}
          >
            <C.SliderTrack>
              <C.SliderFilledTrack />
            </C.SliderTrack>
            <C.SliderThumb fontSize='sm' boxSize='15px' children={obj.guests} />
          </C.Slider>
        </C.Flex>
        <C.ButtonGroup display='flex' justifyContent='flex-end'>
          <C.Button variant='outline' onClick={onCancel}>
            Cancel
          </C.Button>
          <C.Button isDisabled colorScheme='teal'>
            Save
          </C.Button>
        </C.ButtonGroup>
      </C.Stack>
    )
  }
  
  // 3. Create the Popover
  // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
  const PopoverForm = () => {
    const { onOpen, onClose, isOpen } = C.useDisclosure()
    const firstFieldRef = React.useRef(null)
    const rooms = "Rooms"
    const guests = "Guests"
  
    return (
      <C.Button bg="white" _hover={{}}>
        <C.Box display='inline-block' mr={3}>
          {rooms + " / " + guests}
        </C.Box>
        <C.Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <C.PopoverTrigger>
            <C.IconButton size='sm' icon={<EditIcon />} />
          </C.PopoverTrigger>
          <C.PopoverContent p={5}>
            <C.FocusLock returnFocus persistentFocus={false}>
              <C.PopoverArrow />
              <C.PopoverCloseButton />
              <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
            </C.FocusLock>
          </C.PopoverContent>
        </C.Popover>
      </C.Button>
    )
  }

export default SecondaryNav
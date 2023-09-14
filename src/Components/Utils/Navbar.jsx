import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../images/app-logo.png'
const Navbar = () => {
  return (
    <Flex p='2' px='5' align={'center'}>
        <Image src={logo} width={'100px'}/>

    </Flex>
  )
}

export default Navbar
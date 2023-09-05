import { Box, Divider, Flex, Image, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from './FireBase'
import { BsGoogle } from 'react-icons/bs';
import { BsMeta } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Carousel from './Carousel'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLOGIN } from '../../redux/LoginReducer/action'


const Login = ({setShowLogin,setShowSignup}) => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState({
    email: "",
    pass: "",
  })

  const [user, setUser] = useState({})

  const [Err, setErr] = useState('');
  const [disBtn, setdisBtn] = useState(true);

  const handlesubmission = () => {
    setErr("")
    setdisBtn(true);
    if (!value.email | !value.pass) {
      setErr("*Fill all fields");
      return;
    }


    setErr("");
    signInWithEmailAndPassword(auth, value.email, value.pass)
      .then((res) => {
        console.log(res)
        setdisBtn(false);
        dispatch(setLOGIN(res))
        onClose()
      })
      .catch((err) => {
        setdisBtn(false);
        setErr(err.message)
      })
  }

  const nevigate = useNavigate();
  const handleSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }


  //========================= Google Authentication ================

  const toast = useToast()
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    dispatch(setLOGIN(result.user))
    console.log(result.user)
    toast({
      title: 'Logged in successfully.',
      // description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    onClose()
  }
  useEffect(() => {
    onOpen();
  }, [])

  return (
    <>
      <Modal size={'3xl'} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <Box>
          <ModalOverlay />
          <ModalContent position='absolute' top='5%'
            bgGradient='linear(to-r, white, gray.100)'
            size={'100'}>
            <Flex>
              <Box w={'50%'} bg={'transparent'} >
                <Carousel />
              </Box>
              <Box w={'50%'}
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                }}
              >
                <ModalHeader >
                  <Box fontWeight='800' fontSize='35' m={5} >Login </Box>
                </ModalHeader>

                <ModalCloseButton />
                <ModalBody >
                  <Flex >
                    <Box w='100%'>
                      <Box mb='5'>
                        <Text mb='3'>Email Address</Text>
                        <Input outline={'1px solid black'} placeholder='Enter Email' size='sm' onChange={(e) => setValue(prev => (({ ...prev, email: e.target.value })))} />
                      </Box>
                      <Box mb='3'>
                        <Text mb='3'>Password</Text>
                        <Input outline={'1px solid black'} placeholder='Enter Password' size='sm' onChange={(e) => setValue(prev => (({ ...prev, pass: e.target.value })))} />
                      </Box>
                      <Text color={'red'} >{Err}</Text>
                      <Box my='7'>
                        <Button w='100%' p='3' colorScheme='blue' onClick={handlesubmission} disabled={disBtn} >Login</Button>
                      </Box>
                      <Text fontSize='15' my='5' >Doesn't have an account yet ?
                        <Link color='blue' onClick={() => handleSignup()} > Sign up</Link>
                      </Text>
                    </Box>

                  </Flex>
                  <Divider />
                  <Box w={'80%'} m={'auto'} my={5}>
                    <Flex w={'fit-content'} m={'auto'} fontSize={20}>
                      <Box color={'#3182ce'} borderRadius={100} p={5} onClick={handleGoogleLogin} _hover={{ bg: '#3182ce', color: "white" }} cursor={'pointer'} ><BsGoogle /></Box>
                      <Box color={'#3182ce'} borderRadius={100} p={5} _hover={{ bg: '#3182ce', color: "white" }} cursor={'pointer'} fontWeight={700} ><BsMeta /></Box>
                      <Box color={'#3182ce'} borderRadius={100} p={5} _hover={{ bg: '#3182ce', color: "white" }} cursor={'pointer'}><BsInstagram /></Box>
                    </Flex>
                  </Box>
                </ModalBody>
              </Box>
            </Flex>
          </ModalContent>
        </Box>
      </Modal>
    </>
  )
}

export default Login



import { Box, Divider, Flex, Link, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from './FireBase';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { BsGoogle } from 'react-icons/bs';
import { BsMeta } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setLOGIN } from '../../redux/LoginReducer/action';

const SignUp = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  })

  const [user, setUser] = useState({})

  const [Err, setErr] = useState('');
  const [disBtn, setdisBtn] = useState(true);

  const toast = useToast()
  const handlesubmission = () => {
    setErr("")
    setdisBtn(true);
    if (!value.name || !value.email | !value.pass) {
      setErr("*Fill all fields");
      return;
    }

    setErr("");

    
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then((res) => {
        setdisBtn(false);
        setUser(res.user);
        updateProfile(user,{
          displayName : value.name,
        })
        console.log(res)
        dispatch(setLOGIN(res))
        toast({
          title: 'Account Created successfull.',
          // description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      })
      .catch((err) => {
        setdisBtn(false);
        setErr(err.message)
      })
  }

  useEffect(() => {
    onOpen();
  }, [])

  const nevigate = useNavigate();
  const handleLogin = () => {
    nevigate('/login');
  }
  //========================= Google Authentication ================

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(user);
    console.log("logged in Google Successflly");
  }
  return (
    <>
      <Modal size={'3xl'} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}
      >
        <Box>
          {/* <ModalOverlay /> */}
          <ModalContent position='absolute' top='5%'
            bgGradient='linear(to-r, white, gray.100)'
            size={100}>
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
                  <Box fontWeight='800' fontSize='30' >SignUp </Box>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody >
                  <Flex >
                    <Box w='100%'>
                      <Box mb='5'>
                        <Text mb='3'>Name</Text>
                        <Input outline={'1px solid gray'} placeholder='Enter Name' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
                      </Box>
                      <Box mb='5'>
                        <Text mb='2'>Email Address</Text>
                        <Input outline={'1px solid gray'} placeholder='Enter Email' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                      </Box>
                      <Box mb='5'>
                        <Text mb='2'>Password</Text>
                        <Input outline={'1px solid gray'} placeholder='Enter Password' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
                      </Box>
                      <Text color='red' fontSize='15' >{Err}</Text>
                      <Box mt='6'>
                        <Button w='100%' p='3' colorScheme='blue' onClick={handlesubmission} disabled={disBtn} >Signup</Button>
                      </Box>
                      <Text fontSize='15' my='5' >Already have an account?
                        <Link color='blue' onClick={() => handleLogin()} > Login</Link>
                      </Text>
                      <Divider />
                      <Box w={'80%'} m={'auto'} my={5}>
                        <Flex w={'fit-content'} m={'auto'} fontSize={20}>
                          <Box color={'#3182ce'} borderRadius={100} p={5} onClick={handleGoogleLogin} _hover={{ bg: '#3182ce', color: "white" }} cursor={'pointer'} ><BsGoogle /></Box>
                          <Box color={'#3182ce'} borderRadius={100} p={5} _hover={{ bg: '#3182ce', color: "white" }} cursor={'pointer'} fontWeight={700} ><BsMeta /></Box>
                          <Box color={'#3182ce'} borderRadius={100} p={5} _hover={{ bg: '#3182ce', color: "white" }} cursor={'pointer'}><BsInstagram /></Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                </ModalBody>
              </Box>
            </Flex>
          </ModalContent>
        </Box>
      </Modal>
    </>
  )
}


export default SignUp


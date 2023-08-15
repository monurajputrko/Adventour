import { Box, Flex, Link, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FireBase';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  })

  const [user, setUser] = useState({})

  const [Err, setErr] = useState('');
  const [disBtn, setdisBtn] = useState(true);

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
        // await updateProfile(user,{
        //   displayName : value.name,
        // })
        console.log(res)
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
  return (
    <>
      <Modal size={'3xl'} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}
      >
        <Box>
          <ModalOverlay />
          <ModalContent position='absolute' top='20%'
            bgGradient='linear(to-r, white, gray.300)'
            size={100}>
            <Flex>
              <Box w={'40%'} bg={'transparent'} >
                <Carousel />
              </Box>
              <Box w={'60%'}
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
                      <Box mb='3'>
                        <Text >Name</Text>
                        <Input outline={'1px solid gray'} placeholder='Enter Name' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
                      </Box>
                      <Box mb='3'>
                        <Text >Email Address</Text>
                        <Input outline={'1px solid gray'} placeholder='Enter Email' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                      </Box>
                      <Box>
                        <Text >Password</Text>
                        <Input outline={'1px solid gray'} placeholder='Enter Password' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
                      </Box>
                      <Text color='red' fontSize='15' >{Err}</Text>
                      <Box mt='5'>
                        <Button w='100%' p='3' colorScheme='blue' onClick={handlesubmission} disabled={disBtn} >Signup</Button>
                      </Box>
                      <Text fontSize='15' my='5' >Already have an account?
                        <Link color='blue' onClick={() => handleLogin()} > Login</Link>
                      </Text>
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


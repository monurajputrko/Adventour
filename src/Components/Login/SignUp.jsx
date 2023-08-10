import { Box, Divider, Flex, Image, Link, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Input, Modal, Devider, Spacer, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './FireBase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  })

  // const navigate = useNavigate() ;

  const [user,setUser] = useState({})
  
  const [Err,setErr] = useState('') ;
  const [disBtn,setdisBtn] = useState(true) ;

  const handlesubmission =()=>{
    setErr("")
    setdisBtn(true) ;
    if( !value.name || !value.email |!value.pass){
      setErr("*Fill all fields") ;
      return ;
    }
    // onClose
    setErr("") ;
    createUserWithEmailAndPassword(auth ,value.email,value.pass)
    .then((res)=>{
      setdisBtn(false) ;
      setUser(res.user) ;
      // await updateProfile(user,{
      //   displayName : value.name,
      // })
      console.log(res)
    //  navigate('/') ;
    })
    .catch((err)=>{
      // console.log(err)
      setdisBtn(false) ;
      setErr(err.message)
    })
  }
  return (
    <>
      <Button onClick={onOpen}>SignUp</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h='50vh' position='absolute' top='20%'
        // backgroundImage="data:image/jpeg;base64,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" 
        >
          <ModalHeader>
            <Box fontWeight='800' fontSize='30' >SignUp</Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex >
              <Box w='100%'>
                <Box mb='3'>
                  <Text >Name</Text>
                  <Input placeholder='Enter Name' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
                </Box>
                <Box mb='3'>
                  <Text >Email Address</Text>
                  <Input placeholder='Enter Email' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                </Box>
                <Box>
                  <Text >Password</Text>
                  <Input placeholder='Enter Password' size='sm' onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
                </Box>
                <Text color='red'fontSize='15' >{Err}</Text>
                <Box mt='5'>
                  <Button w='100%' p='3' colorScheme='blue' onClick={handlesubmission} disabled={disBtn} >Signup</Button>
                </Box>
                <Text fontSize='15' my='5' >Already have an account?
                  <Link color='blue' to={'/login'} > Login</Link>
                </Text>
              </Box>
              {/* <Box>
                <Image src='data:image/jpeg;base64,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' />
              </Box> */}
            </Flex>
            <Divider />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SignUp

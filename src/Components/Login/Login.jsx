import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';


const Login = () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user)
  return (
    <>
      {isAuthenticated?(
        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        LogOut
      </Button>
      ):(
        <Button colorScheme='blue' onClick={() => loginWithRedirect()}>
        LogIn
      </Button>
      )}
    </>
  )
}

export default Login

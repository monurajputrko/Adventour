import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const AuthLogin = () => {
    const {profile,setProfile} = useContext(AppContext) ;
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const [defaul ,setDefault] = useState({user}) ;
  useEffect(()=>{
    if( isAuthenticated ){
      setDefault(user) ;
      setProfile([...profile,{...user}])
    }
    else{
      setDefault({
        profile :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RzxwdsUIInGxEHGCT9NMR4T8aNGpM3qt7A&usqp=CAU",
        name :"Name",
        email :"name@gmail.com",
      })
    }
  },[isAuthenticated])
  return (
    <div>
      {isAuthenticated ? (
            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} variant="contained">
              LogOut
            </Button>
          ) : (
            <Button onClick={() => loginWithRedirect()} variant="contained">
              LogIn
            </Button>
          )}
    </div>
  )
}

export default AuthLogin

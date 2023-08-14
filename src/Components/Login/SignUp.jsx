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
        size={100}
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
                <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUTERMWFRUVGBcbFxcVFhoXFxYXFRgXGBcVGBYYHSggGBolGxUYIjEhJSkrLjEuFx8zODMsNygvLisBCgoKDg0OGxAQGy0lICUtLS8tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMsA+AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABEEAABAwEFBAcFBAgEBwAAAAABAAIRAwQFEiExBkFRYQcTInGBkaEyscHR8EJScuEUI2KCkrLC8RVDY6IWJCUzU3Pi/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAIDBAEFBgf/xAA2EQACAQIEAggEBAcBAAAAAAAAAQIDEQQSITFBUQUiYXGBkaHwEzKx0RQVweEjQlJikuLxBv/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIoXaTaWz2Gl1lofEzhY3N7yNzW/EwBvK59bOmumARTsjsX2cdQAeIaD6FcckiSi2dbRcasnTNWxDrLNSI34ajmnzIIXQtmtsbJbcqT8NTfTfk/nG5w7iVxSTOuElqbGiIpEAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAoXam/qVhsr7RVzjJrZgvefZYPrIAlTS4F01X711uFnaexZmweBqPAc8+DcI/iXG7IlBXZpm0d/VrZXdWrulztw9ljdzGjh/dY9KiXQCDB8+9UWSjiI8z8Se7gtx2XurrKgcR2Rpx71nqTUUbKVPM+w0+tdr2ntAjnnHmr1itNSk8OYXBzSCCDmDuIK7VU2apVWQQtEv8A2UdQJy7HHh+XEKmNf+pFroL+R6nUOjfbAW2jgqECvTHa/wBRugeB5Tz71uq+Zrgt9SyWllank5js2zkR9pp5ET9Svoy6rey0UWVqZltRoI4jiDzBkHuWuEr6GKrTy6maiIrCkIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgLFqrtp03VHZNY0uJ5NEn0C+ULbaDWq1KrtatR7zyxOLj5THgvpTpAr4Lrtbv9Jzf4+z/UvmcNmG8cjyGpVNWVjRQhdMz7vpZDjUOXIDT4nwC6RcLmUmAYXucNcDC6OWQWl7JUuvql49lphvcP7Ld7XbbVSAFmoh3Nxgeixzd52Z6EbKGnE2q5b0pVSWtLg4ahzHNP8AuCk7zsLKlE49IWmG87QQyWBri0FxEDC6c2QCZHNbDed4VRZC6izHUjJvE81LRXTRS4vSSOWW6yAudhY9rJIaXNwzyE6gfWi2ro02l/R3mzVzFN7uwT9h5IGfBpnwMcSobaUW79HbWdTAJaXPGGMDmnIZE4gRMnLLvyg7Fb6Vophzey6BIJ0PDmOa5HNTlcumoVI2fE+k0WgdGe0zqwdZKxmrRbLHHV9OYz4lsgePJb+t8ZKSujypwcJZWERFIgEREAREQBERAEREAREQBERAEREAREQBERAEREBp3S1Uw3PaOfVDzqsC+crYIYeYjz19CV9DdMg/6TV/9lH0qtK+frwE0xH7Pu/NUVPnRror+Gza+jGpGNhyIIPmur2BgIhcX6LbWTXqMec4EdwJXY7q9qFkqJxqM1xkpU0yi9KbWOAjXfuHeVm3LVY5roeCAQNd5ygKGp1q1as9g6tpa4jDUd2iM4IA3GMip2jQfQpue7qBAnJxEwJgSMzyUowd7iUlbLdX70ZtWxNe0g9oEEZr5is7cFeqKfste8Nj7oeQPQL6F2kvR1G7bTaINNwpPLQ7Vry2Gg88RXz3c1HCBPDPxn5qyNrMpSebuOkdEtqLryZPtBlRjufZxNP+0+S7qvn7osyvWmBvn+R35r6BVuH2feU4tddPs/VhERXmUIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDn3TdaMN1x9+tTae4Bz/wCgLgwOJpHDL1y9Cu19P74u6iONob6Uqq4SKmF3ePks9T5jZQfUPdnrY6jbmOblJiOIO5d1uu8g5oIyPDeF8/MfNdhH3me8LuF22fFTaRrAVWIWzLsPs0+ZOVLEyq4OORG8aqasN2U2wcIJGYyGS1mz1XszkGNxWvbV9JVoptdTs9JrXER1jjiifusiCe8+CrpyvoXTlNQspaHnTHtAKjmWGkZAIfWj9nNjPPPwC0EtwAcdfAblRdTC97n1HFxJxVHHMk8J4kqi31sVQ90juyge9T3diMUowvzOi9ELR/iOeop1CP8Ab8D6ruK+eOj69RQtlOqdAcLh+y4QT4a+C+hQZ0V2HejXaZMYuunzRUiItBkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA0Xpju3rrsdH+W7H5MePUuA8V88XuQcFRuj2tB5PaxoqDl2pPcV9c22yMq03U6jcTHiHA7wvnPbHY+rZ6jrOxrntqP3DSo0uNN4O4PpuM7gQ4fZCqmrO/A0UXplNP2dsDq9rptA3hx5NZB9+Xiu43Y3A0KE2N2QFkplz4dVfGIjRoGjW8ue9bI6nAWOpPPLTZGunHKrGPb6gwlcs2geDVjn8D9eK6LfNbCO8H01XNbbT/AFonU695g+nwUYPW5fbQx6r+roQNXn6Pqo20Vcx5HwEBZF8O7cDRogeQPzUfaNARvAP15K+C4lNSWtuRn2O3FjwQuz7FdJ9nFJtK1uLC3Jr4LhH3XBoJBHGNPXgZfOav0ah7/rVSyuLzIrbU45ZH15dl72e0NxWeqyqBE4HAkTpI1His9cF6MrZhtLHUahbLHCo05jLDxnJd0oVcQCvpyzLUyVqeSVkXkRFMqCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiLCrVycm6ceKAuV7RhyGbvd3rR7N1lUmtXjrCSCBowAkBg7o85W1s171G3pYg04xIDtY0DuPj71XXi3C3d+vvwLKD69/fAjXtCwqzvu5rONBvf3lC0DQLA0z0E0avf1EuouxNggEgjjGi5pa7RNdzuBAHM4gD4RK6xtK49S4N1Ijzn4Lj95UC1/KchyH9khu7l1+pdGJeX/ceefjl9BYhaMPdI8DmPism3PBcHcde/KPcVhMzlvNaY7GaXzMpY2IWVZW5xvBVlxzz0OXyKyKAM9w9ySeh2C10NluKm9lRtSnMg5jxgxC+gtnLx61hnXWO9cU2ecxjmPeYAIJjM/3yC63c72lzalKQ0xIOWR5DRRoN3bLMZRkoJtac/wBDbAV6qWlVLYeSEREAREQBERAEVJMapiHFAVIiIAiIgCIiAIiICFvu92URDj+6NT+S1+rtS77FNv7xJ90KBvq8uttNWTvOHkAYHxUfQtG4rO6jb0Pp8L0TSjTTqK8rJ67a8lt2a3J2rtDXO8DuaPiqDe9cghzyQeJ9NMlGPKWetnhOhUcze7NqwlGK6sI/4r7E/YrbiEHX3rKUA0kO5hZtK8dzh4j5KmUWedXwTTvTV1yPLwpYieA+K59thdwGYH0Vv1e8KYBxE+AcfcFp+0NuxtcGUqjsjmWmPnop08NVnqo+L0Xm7IyKTi7WfdZt+S1OZu1I37lQTnkYG/8ANZttolrgSI+SjXzPEK1LUoqRcXqmu9WL5cD8FlVGENEcBPwnwhWKTeyDwKzbNJkuzB1+ahItpQcm0jcrGGvs7Ht3ZOHArZv0mq2tQ6pzm46LZg5GHPBkaHTeub3FWgvphxa6JaNQ6NQfgV0C66rj1L3RIpgCOGN3HuVVrO3afT0KnxMOpNJ6NPle3I6zdNt6xmftDI/MKRC1G47ZgEkTIzC2iy12vbLTI93Irenc+LxVB06jstC+iIumYIiIAiIgMe2N7B5ZqPBUrUbII4hRK4zjKw5VCoeJ81aCqQ4XeuPE+aC0O4lWkQF79Kdx9Aqm2w74WMqSujUmQVj21+Gk933WuPkCVXZ3S0fXP4qzebC6jUaNSx48wQuPYkrXV9jhVotf/MyTqSR4jMe7yWS2pmoS93Q8OG7LxaflClbH2nQ3PFpGpnRYEz9InFJe+BJU6yVeKkLFs5WfmQGD9rIxyaM/OFsFk2doRDi9x7wB5AK+NKcuB49bpTC0XZyu/wC3X129TX7NV6ymHD2m5FXgJzW02O5KDXEYIDxBMmZ3GSVdGz1EGO1/F/8AKt+BJGD84w7vpJctF9+Zp1az5KNt7YYV0Q7O0jvf5j5Kh+ytmOocf3h8AoOg3wLodOUI7t+X7nz7tDZzgngfr3rXmNyXaOk3ZyhTsr3UmQRGck6EfCVyFlAmoABuiB3LmSUFZmDF4qniamene1ra/wDXwLtnaMDpHD6+uKu0KmERrM4u4rJu9rGvLKuTYg8ufdosq2XFVsdUGo0vok9ipHZcDuJ+y4cCoON7s5TqZJRtuWrpu1z6jY3xB/FMLa7BaajKlCnUyiAZGoLz+a3DYfZNjKji+niZAIDzmx4MyMJgggjloRrl5trcvVWmg9jCaQwtJzIBLnRJ3TMeXFRnSklmZ7WAx9Cc1QirOz5auz27eRfo2zDaQzc4Ngcytkui0FtQCcnGD37itLvVuC0NeNMvcp2w20OcIBkyQdwwRMn94eqthLVp8zPisOp04yit469/vXwN9RUtMiVUtB8sEREAREQBRNobDyOfvzUso68Gw6eI9y4wY69VK9CESpF4iAIipKAz7A7KOH18VhbU2h1OyVXMBJwxluByLjyAWRYXdqPr60Wc9oIg6I1dWLKUlCSk1ezWnPsPnC+KUyRxmPCMlvPR5Z6Rs7aozqgljiTMRmCBu7Mc1O7UbAU6rHOsv6upM4CT1bsvZA+xyjJaLsbbalmtT7PUa5uIw4EZh40J4CJBPcssIuE1mPrcXiY4/BTdCTTjrKOztx71x8LO17HUjx3LxxadDBWOLQMPIqyx8uyXpRXE+JkyRmQpCz1MbZ+0Mj81gU9QOKrY806g4OyPwRq4RnuC8lXiFaLVBMka3tpd3W2Sq0b2lcDulvVWlpqNnqn9sdxie6YX07UZIIO9aVU2GaLa6uGBzKgh7SJ1ymOHH6BhVjmV0aMPUUbpkdadhqFfq6zCRjIIc2PZ1z3OEZQVsl3bLtZTNEulhb2qeEGlJy7NN2LB3NIHJV3XdLrPUbTY6aI0aTmwHdJ1GWuvvWw2fQuP2j6KSikr21IzqS2Tuj277MGMa0fZEDuGQHol4U2upua/RwI8xl4zn4LIZosG3VcxhbiI1HCd/p6qLFNNyVu85/tZZ3U6jGuz7IIdGR3eeSktj7PibjdPbdA/ADEj8RBz4ALZbXSpVGRXpSBoH5Z8ozKs0qYaOyIG7lwCyT6kmz33j3PDqlltLi9LeHvTxNjRUUnS0HiAq1qPnwiIgCIiALDvJvZB4H3rMVi1Nlh7p8s1xgi16FSvVwiVL1R943myjhLjq4A/szvKzQ5E0ScWkm1vsVqleqldIsu2d0OB+uKllCtdGfBTDDkF0RKly/pBquoW3rWtBx0mzI1gkEB2o0C6guedLdn7FCrwLmHxAcP5SqMQ2qd1ujZg7fFSls7ov2VjsAbGe/gCdRKy6TQNPPiVoP8AxhaHAYcDRoYbJkd5j0VqvfdocAHVC38PZ/lhXLExtZGqn0HiKnWcoq/e/orep1CzmXBXr1PZB4Fcy2ftJ66HOmWmDJOfivL/AKxzAdoRkDpzXVX42L1/59uWR1PHL/sdastTsArIxArmex961HUXMdUeYOUuJgRpmVmVLXVY+OsfG7tH5rme6vYqn0NONSVNz27N/U35zV654GpA78lozbS4z23H94nu3rylaZGueevcmfsILolrXN6fubG+8Kb6/VMqMLyIgOBMZk5dyk6ldgyxN0yzC5ls7RmrVtDt5c2n4GC70CmbyeMm7gM+4Liqtq9i+r0PThUyRm+3Tjx8jbLzvDqwGtALiJz0A4rQNsmupW5lQkjrqTHSCR229lwHIDB5qSbXDSS4wBvPABWOklgNislcZ4XgT+zUYT76bVRXWeD8y7C0VhqsFvmum+d1deqRnXTacTQSSTxJlTTHLQdn71hoBa+OOF3yW5WG1B4kFYYS4FeJpOMnyNlu900xykLKUddDuy4c58x+SkV6lN3gjxqitNhERTIBERAF4QvUQEGRBjhl5LxXbcIqHnn5/mrSiRNPv+s9tZ5wgim5roIyIyJyORylZdy3pFodTc7KrLmSZgtjE3xBBjkVi7U1MNdwjJ7G+Oo+CjKVKm51EukPaJa5pgtfhmSNCCAcjksUZ5aj14nsOCqUErcPp+6OhyvVF3NezawcNHsOF7eB3HuIII71JStqZ5EouLsz1Q997R17PVDWhjmFgIxAzvBzBG8HzUutR6RreyhTo1Htc4F7mS2DEjGAQfwuXJ3y6Hads2pms6QnD27OD+GoR6FpUHtztbTtdkFJlNzXio13aLcMAOBzBme1wWrNv+yP1qOYeD2H+mVkNp0ansVqTuQeJ8iZWeTm1Zs20skZKS4Gv2e0uaIcBlpnnxVQvIzmwj1U5V2ZxCTPgPio+psawnIFcSPoaPSCUEtPp9yqyXgA5pBMg9xWfa2PrVWlhGeTjqANZPd8VGu2RfoKjmjvMLbdnLgo0GNY2satSoZMiIaOIkwNw8UqdVaMu/MWk3lV+Fm2vHqokNmroZTnUl2ZJ08tymP8LpVMy3lkT8FdtNGA2kz2nZuPBu7zPuWTdVRudNpnDqd08OZVN3ezZ408RVk3UzO/fw97GHSumm37J8XOPvK9dc9I6AieDnD4qaNOV4GALri1xKvxVR65n5sgqVwsY0NYXANEAToPFWLRceI51H+f5LZS0KggLlnz9SccZWTvf6fY1ars+He0XO1yc4kZ65TCyHXX2WsLnFrIwtJJa2NIboFPOATCFW6d936nZYupK2ZkTQu0DcsunZ8Oiy8gvCVxU0it1G9zLuU9pw5e4/mphRFzt7bnbojxJBUuvRofIjz6/wA4REVxSEREAREQFivZ2v8AaGm+Y9yxX3YPsvI7wD8lIolgczv6vjrEH/Ly8ATJUJWpw4PE9kgxy3+khbptrZWCo14aA5zXBxG8CIlatW0Z3n4Ly6qak7ntYeScFl5Fywu6q2tqM9moMFSNJB7DveP4VvIK1O52DERGXBT9OkA3w4laKNV2szJiqOaWZGctc6RLudXu6q1jcT2Fj2gCTLXYXQBvwPepShVM6rJqHsO/C7+UrSnc89KzOEWfY21vjsNYDHtOAP8AC3OVPWHove4DrqhE8AGTALiA6prABOW4FdlttFrAGsAaCDOHKdd4zWlWw/olhoiz9jDOEntuGJvahz5Ofeu20uaKWapNQjuzFufYWzUXSwvLg0PmmalQQcOHNsU5IeCBOknQFT7rNZmloc5pe5s4XVO0OIwUg6YOR7UZarh143zabSC60V6lTXJzzh1+5OH0XRNgu0LCDnFlfHL9bWXo4vo6WGpQqSaeZpW5XTfvQYV/Gqzg21ljJ6ccvA32lXoMzp0ZInVoHdm7E73LW7JZnC0VK4pwS5zqjQMyToBxyAW1jVAsNSgppK9jkMR8OTaV78yCfazJDT+sfm93/jbHoYEchmqbDUOMCg3sjfvPMcAtjNlY+cTGmRBkDMcFmsoNpsPVtDe4LN+Dal8xe8dHJfKRN4We0Pw9W9lJv2ifacfugFp+fxrp2Cs1ji94c77IwgAfijWVn3b2iS7M8VkVNVo+DBaNXM7xU3DKkl3JX89zAp2R5aCYngrAouOg1nfwU1V0VFLRQdCDWxFYidyCfTf90qkU6m5j/wCE/JTb9Csiyeyq5YSPBsuji3xSIKnY6zvsEd8D81l2e53TNR2XBvzKmURYeC31IyxE3toW6VMNENEAK4iK8oCIiA//2Q==' />
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

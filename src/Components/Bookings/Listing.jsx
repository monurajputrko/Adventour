import React, { useEffect } from 'react'
import HotelsGrid from './HotelsGrid'
import * as C from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotel } from '../../redux/HotelReducer/action'
import Loader from '../Utils/Loader'
const Listing = () => {
  const hotels = useSelector(store=>store.hotels)
  const isLoading = useSelector(store=>store.isLoading)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHotel())
  },[])
  if(isLoading) return <Loader />
  return (
   <C.SimpleGrid columns={1} p={5}>
    <C.Flex minWidth='max-content' alignItems='center' gap='2' justify={"space-around"}>
        <C.Button colorScheme={"blue.300"}>UPDATE SEARCH</C.Button>
    </C.Flex>
    <C.SimpleGrid columns={2} gap={6} p={5} alignItems={"start"}>
      {hotels?.map(hotel=>{
        return <HotelsGrid {...hotel}/>
      })}
    </C.SimpleGrid>
  </C.SimpleGrid>
  )
}

export default Listing
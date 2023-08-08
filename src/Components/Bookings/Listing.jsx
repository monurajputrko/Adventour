import React, { useEffect } from 'react'
import HotelsGrid from './HotelsGrid'
import * as C from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotel } from '../../redux/HotelReducer/action'
const Listing = () => {
  const hotels = useSelector(store=>store.hotels)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHotel())
  },[])
  console.log(hotels)
  return (
   <C.SimpleGrid> 
    <C.SimpleGrid columns={2} gap={6} p={5} alignItems={"start"}>
      {hotels?.map(hotel=>{
        return <HotelsGrid {...hotel}/>
      })}
    </C.SimpleGrid>
  </C.SimpleGrid>
  )
}

export default Listing
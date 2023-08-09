import React, { useEffect, useState } from 'react'
import HotelsGrid from './HotelsGrid'
import * as C from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotel } from '../../redux/HotelReducer/action'
import Loader from '../Utils/Loader'
import { EditIcon } from '@chakra-ui/icons'
import SecondaryNav from './SecondaryNav'

const Listing = () => {
  const initRef = React.useRef()

  const hotels = useSelector(store => store.hotels)
  const isLoading = useSelector(store => store.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotel())
  }, [])
  if (isLoading) return <Loader />
  return (
    <C.Grid>
      <SecondaryNav />
      
    </C.Grid>
  )
}

export default Listing
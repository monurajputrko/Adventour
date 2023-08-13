import React, { useEffect, useState } from 'react'
import * as C from '@chakra-ui/react'
import SecondaryNav from './SecondaryNav'
import Detail from './Detail'
import HotelGrid from './HotelGrid'
const Booking = () => {
  return (
    <C.Flex flexDirection={'column'}>
      <SecondaryNav />
      <HotelGrid />
    </C.Flex>
  )
}

export default Booking
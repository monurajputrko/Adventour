import React from 'react'
import HotelsGrid from './HotelsGrid'
import * as C  from '@chakra-ui/react'

const Listing = () => {
  return (<C.SimpleGrid>
    <C.Image 
      width='80%'
      height='500px'
      src="https://www.dubai-hotels-now.com/data/Imgs/OriginalPhoto/12262/1226238/1226238437/img-copthorne-lakeview-hotel-green-community-dubai-21.JPEG"
      alt='banner'
    />
    <C.SimpleGrid columns={3}>
      <HotelsGrid />
      <HotelsGrid />
    </C.SimpleGrid>
  </C.SimpleGrid>
  )
}

export default Listing
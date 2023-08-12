import React, { useEffect, useState } from 'react'
import HotelsComp from './HotelsComp'
import { useDispatch, useSelector } from 'react-redux'
import { getHotel } from '../../redux/HotelReducer/action'
import Loader from '../Utils/Loader'
import { Flex, Grid } from '@chakra-ui/react'
import Filters from './Filters'

const HotelGrid = () => {
    const dispatch = useDispatch()
    const hotels = useSelector(store => store.hotels.hotels) || []
    const isLoading = useSelector(store => store.hotels.isLoading)
    useEffect(() => {
        dispatch(getHotel())
    }, [])
    if (isLoading) return <Loader />
    return <Flex mx="20px" w="80vw" m="auto" >
        <Filters />
        <Grid p="10px 2em 10px 10px" w="80vw" ml="20vw">
            {hotels?.map(hotel => {
                return <HotelsComp key={hotel.id} {...hotel} />
            })}
        </Grid>
    </Flex>
}

export default HotelGrid
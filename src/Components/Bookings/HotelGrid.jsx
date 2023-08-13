import React, { useEffect, useState } from 'react'
import HotelsComp from './HotelsComp'
import { useDispatch, useSelector } from 'react-redux'
import { getHotel } from '../../redux/HotelReducer/action'
import Loader from '../Utils/Loader'
import { Flex, Grid } from '@chakra-ui/react'
import Filters from './Filters'

const HotelGrid = () => {
    const dispatch = useDispatch()
    const [spinner, setSpinner] = useState(false)
    const hotels = useSelector(store => store.hotels.hotels) || []
    const isLoading = useSelector(store => store.hotels.isLoading)
    const showSpinner = () => {
        setSpinner(true)
        setTimeout(() => {
            setSpinner(false)
        }, 1000)
    }
    useEffect(() => {
        dispatch(getHotel())
    }, [])
    if (isLoading) return <Loader />
    return <Flex mx="20px" w={{base:"98vw", lg:"80vw"}} m="auto" flexDirection={{base:"column",lg:"row"}}>
        <Filters showSpinner={showSpinner}/> 
        <Grid p={{base:"10px",lg:"10px 2em 10px 10px"}} w={{base:"95vw",lg:"70vw"}} ml={{base:"30px",lg:"22vw"}}>
            {hotels?.map(hotel => {
                return <HotelsComp key={hotel.id} spinner={spinner} {...hotel} />
            })}
        </Grid>
    </Flex>
}

export default HotelGrid
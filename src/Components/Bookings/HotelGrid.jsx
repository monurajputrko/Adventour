import React, { useEffect, useState } from 'react'
import HotelsComp from './HotelsComp'
import { useDispatch, useSelector } from 'react-redux'
import { getHotel } from '../../redux/HotelReducer/action'
import Loader from '../Utils/Loader'
import { Button, Flex, Grid } from '@chakra-ui/react'
import Filters from './Filters'
import { slice } from 'lodash'
import Error from '../Utils/Error'
import { useParams } from 'react-router-dom'

const HotelGrid = () => {
    const dispatch = useDispatch()
    const isSkeleton = useSelector(store => store.hotels.isSkeleton)
    const { city } = useParams()
    const hotels = useSelector(store => store.hotels.hotels) || []
    const isLoading = useSelector(store => store.hotels.isLoading)
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(4)
    const initialHotels = slice(hotels, 0, index)
    const loadMore = () => {
        setIndex(index + 3)
        if (index >= hotels.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }
    useEffect(() => {
        dispatch(getHotel(city))
    }, [])
    if (isLoading) return <Loader />
    return <>
        <Flex mx="20px" w={{ base: "98vw", lg: "80vw" }} m="auto" mt="25px" flexDirection={{ base: "column", lg: "row" }}>
            <Filters />
            {
                initialHotels.length === 0 ? <Error /> :
                    <Grid p={{ base: "10px", lg: "10px 2em 10px 10px" }} w={{ base: "95vw", lg: "70vw" }} ml={{ base: "5px", lg: "22vw" }}>
                        {initialHotels?.map(hotel => {
                            return <HotelsComp key={hotel.id} spinner={isSkeleton} {...hotel} />
                        })}
                    </Grid>
            }
        </Flex>
        {initialHotels.length > 0 &&
            <Flex textAlign={'center'} justifyContent={'center'} ml='10vw'>
                {isCompleted ? (
                    <Button onClick={loadMore} className="animate-border text-white px-6 py-2 inline-block rounded-md bg-white bg-gradient-to-r from-cyan-200 via-cyan-500 to-cyan-200 bg-[length:400%_400%] p-0.5">
                        That's It
                    </Button>
                ) : (
                    <Button onClick={loadMore} className="animate-border px-6 py-2 text-white inline-block rounded-md bg-white bg-gradient-to-r from-cyan-200 via-cyan-500 to-cyan-200 bg-[length:400%_400%] p-0.5">
                        Load More
                    </Button>
                )}
            </Flex>
        }
    </>
}

export default HotelGrid
import axios from "axios"
import { FILTER_HOTEL_ERROR, FILTER_HOTEL_REQUEST, FILTER_HOTEL_SUCESS, GET_HOTEL_ERROR, GET_HOTEL_REQUEST, GET_HOTEL_SUCESS } from "./actionType"
export const getHotel = (city='ahemdabad') => async(dispatch) => {
    dispatch({type:GET_HOTEL_REQUEST})
    try{
        let response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}/hotels?city_like=${city}`)
        setTimeout(()=>{
            dispatch({type:GET_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:GET_HOTEL_ERROR})
    }
}
export const filterHotel = (city='ahemdabad',q='') => async(dispatch) => {
    dispatch({type:FILTER_HOTEL_REQUEST})
    try{
        let response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}/hotels?city_like=${city}&${q}`)
        setTimeout(()=>{
            dispatch({type:FILTER_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:FILTER_HOTEL_ERROR})
    }
}



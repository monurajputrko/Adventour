import axios from "axios"
import { GET_HOTEL_ERROR, GET_HOTEL_REQUEST, GET_HOTEL_SUCESS } from "./actionType"
export const getHotel = () => async(dispatch) => {
    dispatch({type:GET_HOTEL_REQUEST})
    try{
        let response = await axios.get(`http://localhost:8080/hotels`)
        setTimeout(()=>{
            dispatch({type:GET_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:GET_HOTEL_ERROR})
    }
}
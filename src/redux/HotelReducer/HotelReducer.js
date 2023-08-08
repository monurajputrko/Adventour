import { GET_HOTEL_ERROR, GET_HOTEL_REQUEST, GET_HOTEL_SUCESS } from "./actionType";

const iniState = {
    hotels: [],
    isLoading: false,
    isError: true
}


export const HotelReducer = (state=iniState,{type,payload}) =>{
    switch(type){
        case GET_HOTEL_REQUEST : return {...state,isLoading:true}
        case GET_HOTEL_SUCESS: return {...state,isLoading:false,hotels:payload}
        case GET_HOTEL_ERROR: return {...state,isLoading:false,isError:true}
        default: return state;
    }
}


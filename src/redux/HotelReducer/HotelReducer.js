import { FILTER_HOTEL_ERROR, FILTER_HOTEL_REQUEST, FILTER_HOTEL_SUCESS, GET_HOTEL_ERROR, GET_HOTEL_REQUEST, GET_HOTEL_SUCESS } from "./actionType";

const iniState = {
    hotels: [],
    isLoading: false,
    isError: false,
    isSkeleton: false
}


export const HotelReducer = (state=iniState,{type,payload}) =>{
    switch(type){
        case GET_HOTEL_REQUEST : return {...state,isLoading:true}
        case GET_HOTEL_SUCESS: return {...state,isLoading:false,hotels:payload}
        case GET_HOTEL_ERROR: return {...state,isLoading:false,isError:true}
        case FILTER_HOTEL_REQUEST : return {...state,isSkeleton:true}
        case FILTER_HOTEL_SUCESS: return {...state,isSkeleton:false,hotels:payload}
        case FILTER_HOTEL_ERROR: return {...state,isSkeleton:false,isError:true}
        default: return state;
    }
}


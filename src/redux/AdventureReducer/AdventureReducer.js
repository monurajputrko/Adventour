import { Add_ADVENTURE_REQUEST, GET_ADVENTURE_ERROR, GET_ADVENTURE_REQUEST, GET_ADVENTURE_SUCESS } from "./actionType";

const iniState = {
    adventures: [],
    isLoading: false,
    isError: false,
    cartAdventure: {}
}


export const AdventureReducer = (state=iniState,{type,payload}) =>{
    switch(type){
        case GET_ADVENTURE_REQUEST : return {...state,isLoading:true}
        case GET_ADVENTURE_SUCESS: return {...state,isLoading:false,adventures:payload}
        case GET_ADVENTURE_ERROR: return {...state,isLoading:false,isError:true}
        case Add_ADVENTURE_REQUEST : return {...state,cartAdventure:payload}
        default: return state;
    }
}
import {GET_LOGIN_REQUEST, SET_LOGIN_REQUEST } from "./actionType";

const iniState = {
    user: [],
    logged: false
}


export const LoginReducer = (state=iniState,{type,payload}) =>{
    switch(type){
        case GET_LOGIN_REQUEST : return {...state,user:payload}
        case SET_LOGIN_REQUEST: return {...state,logged:true}
        default: return state;
    }
}


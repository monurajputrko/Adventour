import {GET_LOGIN_REQUEST, LOGOUT_REQUEST, SET_LOGIN_REQUEST } from "./actionType";

const iniState = {
    user: {},
    logged: false
}


export const LoginReducer = (state=iniState,{type,payload}) =>{
    switch(type){
        case GET_LOGIN_REQUEST : return {...state}
        case SET_LOGIN_REQUEST: return {...state,logged:true,user:payload}
        case LOGOUT_REQUEST: return {...state,logged:false,user:{}}
        default: return state;
    }
}


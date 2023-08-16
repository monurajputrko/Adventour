import axios from "axios"
import { GET_LOGIN_REQUEST,LOGOUT_REQUEST,SET_LOGIN_REQUEST } from "./actionType"
export const getLOGIN = () => {
    return {type: GET_LOGIN_REQUEST}
}
export const setLOGIN = (payload) => {
    return {type: SET_LOGIN_REQUEST,payload}
}
export const setLogout = (payload) => {
    return {type: LOGOUT_REQUEST}
}



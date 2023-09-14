import { GET_LOGIN_REQUEST,SET_LOGIN_REQUEST } from "./actionType"
export const getLOGIN = () => {
    return {type: GET_LOGIN_REQUEST}
}
export const setLOGIN = (payload) => {
    return {type: SET_LOGIN_REQUEST,payload}
}
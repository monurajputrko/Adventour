import axios from "axios"
import { Add_ADVENTURE_REQUEST, GET_ADVENTURE_ERROR, GET_ADVENTURE_REQUEST, GET_ADVENTURE_SUCESS } from "./actionType"
export const getAdventure = () => async(dispatch) => {
    dispatch({type:GET_ADVENTURE_REQUEST})
    try{
        let response = await axios.get(`http://localhost:8080/adventures`)
        setTimeout(()=>{
            dispatch({type:GET_ADVENTURE_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:GET_ADVENTURE_ERROR})
    }
}
export const addAdventure = (obj) =>{
    return {type:Add_ADVENTURE_REQUEST,payload:obj}
}


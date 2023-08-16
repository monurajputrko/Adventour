import axios from "axios"
import { ADD_ADVENTURE_REQUEST, GET_ADVENTURE_ERROR, GET_ADVENTURE_REQUEST, GET_ADVENTURE_SUCESS } from "./actionType"
export const getAdventure = () => async(dispatch) => {
    dispatch({type:GET_ADVENTURE_REQUEST})
    try{
        let response = await axios.get(`https://${process.env.REACT_APP_BASE_SERVER_URL}/adventures`)
        setTimeout(()=>{
            dispatch({type:GET_ADVENTURE_SUCESS,payload:response.data})
        },[500])
    }catch(e){
        dispatch({type:GET_ADVENTURE_ERROR})
    }
}
export const addAdventure = (obj) =>{
    return {type:ADD_ADVENTURE_REQUEST,payload:obj}
}


import axios from "axios"
import { GET_ADVENTURE_ERROR, GET_ADVENTURE_REQUEST, GET_ADVENTURE_SUCESS } from "./actionType"
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



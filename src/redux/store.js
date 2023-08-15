import { HotelReducer} from "./HotelReducer/HotelReducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { AdventureReducer } from "./AdventureReducer/AdventureReducer"
import { LoginReducer } from "./LoginReducer/LoginReducer"

const root_reducer = combineReducers({hotels:HotelReducer,adventures:AdventureReducer,login:LoginReducer})
export const store = legacy_createStore(root_reducer, applyMiddleware(thunk))
import { HotelReducer} from "./HotelReducer/HotelReducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { AdventureReducer } from "./AdventureReducer/AdventureReducer"

const root_reducer = combineReducers({hotels:HotelReducer,adventures:AdventureReducer})
export const store = legacy_createStore(root_reducer, applyMiddleware(thunk))
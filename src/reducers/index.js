import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLoggedReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
})

export default allReducers
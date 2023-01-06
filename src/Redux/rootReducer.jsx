import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping-reducer";
import userReducer from "./User/user-reducer";
const rootReducer = combineReducers({ shopReducer, userReducer });
export default rootReducer;

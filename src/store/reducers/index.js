import { combineReducers } from "redux";
import user from "./user";
// import auth from "../../containers/auth/store/reducer";

const rootReducer = combineReducers({ user });

export default rootReducer;

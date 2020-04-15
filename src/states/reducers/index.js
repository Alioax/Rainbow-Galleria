import vp from "./vp";
import notification from "./notifications";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    vp, notification
});

export default allReducers;
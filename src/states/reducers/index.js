import {combineReducers} from "redux";
import saved from "./saved";
import notification from "./notifications";
import vp from "./vp";

const allReducers = combineReducers({
    vp, notification,saved
});

export default allReducers;
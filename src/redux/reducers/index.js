import {combineReducers} from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import hours from "./hours";

export default combineReducers({todos, visibilityFilter, hours});

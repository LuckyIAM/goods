import { createStore, combineReducers} from "redux";
import wordReducer from "./wordReduser";

const store = createStore(combineReducers({wordReducer}));

export default store;
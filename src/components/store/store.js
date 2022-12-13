import { createStore, combineReducers} from "redux";
import wordReducer from "./wordReduser";
import storeReducer from "./storeReducer";
const store = createStore(combineReducers({wordReducer, storeReducer}));

export default store;
import { combineReducers } from "redux";
import { mortgagesReducer } from "./mortgagesReducer";

const rootReducer = combineReducers({
  mortgages: mortgagesReducer,
});

export default rootReducer;

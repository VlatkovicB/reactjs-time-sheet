import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
  clients: clientsReducer,
  countries: countriesReducer
});

export default rootReducer;

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as contactsReducer } from "./reducer";

const rootReducer = combineReducers({contactsReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

// const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import subscribersReducer from "./emp/reducer";
// import {allCourseReducer} from './reduFolder/course';
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";

import { combineReducers } from "redux";
// import employeesListReducer from "./reducer/allemployees";
import * as reducers from './reducer';


// const initialState={};

const rootReducer=combineReducers(reducers);
// const rootReducer=employeesListReducer;
const logger= createLogger({collapsed: true});
// create store
// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk,logger));
export default store;

// 1 actions 
// - donen

// 2 reducer
//
// 3 store
// 
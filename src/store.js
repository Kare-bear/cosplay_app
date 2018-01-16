//in video js/index.js

import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import user from "./ducks/user";
import allReducers from "./ducks";

const store = createStore( user, allReducers, applyMiddleware(promiseMiddleware()));

export default store;
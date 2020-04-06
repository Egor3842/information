import {createStore, combineReducers, applyMiddleware}  from 'redux'
import UsersReducer from './UsersReducer';
import thunkMiddleware from 'redux-thunk'

let reducers=combineReducers({
    UsersReducer:UsersReducer   
})
let store=createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
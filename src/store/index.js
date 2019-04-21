import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/index'
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

let index=createStore(reducer,applyMiddleware( reduxThunk, reduxPromise));

export default index;

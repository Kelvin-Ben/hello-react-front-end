import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './reducers/greetingReducer';

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;

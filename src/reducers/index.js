import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import prosReducer from './pros.reducer';
import consReducer from './cons.reducer';

const reducers = combineReducers({
    pros: prosReducer,
    cons: consReducer,
})

export default createStore(reducers, applyMiddleware(thunk));
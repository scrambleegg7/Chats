import joinReducer from './joinReducers';


import { combineReducers } from 'redux';


const rootReducer = combineReducers(
    {
        join: joinReducer,
    }
);

export default rootReducer;
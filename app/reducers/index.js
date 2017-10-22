import { combineReducers } from 'redux';
import data from './key_reducers';

const allReducers = combineReducers({
    data: data
   
});

export default allReducers
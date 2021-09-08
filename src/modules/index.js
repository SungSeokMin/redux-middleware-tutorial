import { combineReducers } from 'redux';
import counter from './counter';
import posts from './posts.js';

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;

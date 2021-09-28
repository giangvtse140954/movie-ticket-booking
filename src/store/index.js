import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../containers/shared/Auth/module/reducer';

const rootReducer = combineReducers({ loginReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

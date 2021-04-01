import {combineReducers} from  'redux';
import Reducer1 from '../reducer/reducer';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    Reducer1
})

const middleware = [thunkMiddleware]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))



export default store
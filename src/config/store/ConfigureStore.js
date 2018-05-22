import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const initalState = {
    //config initalState
}

const store = createStoreWithMiddleware(rootReducer, initalState);

//persist to do
export { store }
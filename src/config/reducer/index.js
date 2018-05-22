import { combineReducers } from 'redux'
import createWallet from './LoginReducer'

const rootReducer = combineReducers({   
    createWallet:createWallet,
});

export default rootReducer
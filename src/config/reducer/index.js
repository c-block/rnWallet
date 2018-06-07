import { combineReducers } from 'redux'
import createWallet from './LoginReducer'
import Test from './TestReducer'

const rootReducer = combineReducers({   
    createWallet:createWallet,
    Test:Test,
});

export default rootReducer
import * as types from '../action/ActionType'

const defaultState = {
    mnemonic: '',
    password: '',
}

export default function createWallet(state = defaultState, action) {
    switch (action.type) {
        case types.SET_MNEMONIC:
            return {
                ...state,
                mnemonic:action.mnemonic,
            }
            break;
        case types.SET_PASSWORD:
            return {
                ...state,
                password:action.password,
            }
            break;
        default:
            return state;
    }
}
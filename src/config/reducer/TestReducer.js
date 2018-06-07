import * as types from '../action/ActionType'

const defaultState = {
    mnemonic: '',
    address: '',
    seed: '',
    path: '',
    api: '',
}

function Test(state = defaultState, action) {
    switch (action.type) {
        case types.TEST_WALLET:
            return {
                ...state,
                mnemonic: action.mnemonic,
                address: action.address,
                seed: action.seed,
                path: action.path,
            }
            break;
        case types.TEST_SELECT_API:
            return {
                ...state,
                api: action.api,
            }
            break;
        default:
            return state;
    }
}

export default Test 
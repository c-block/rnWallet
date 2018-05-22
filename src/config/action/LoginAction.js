import * as types from './ActionType'


function setMnemonic(mnemonic) {
    return {
        type: types.SET_MNEMONIC,
        mnemonic: mnemonic,
    }
}

function setPassword(password) {
    return {
        type: types.SET_PASSWORD,
        password: password,
    }
}

function createMnemonic(mnemonic, password) {
    return dispatch => {
        dispatch(setMnemonic(mnemonic));
        dispatch(setPassword(password));
    }
}

export { createMnemonic }
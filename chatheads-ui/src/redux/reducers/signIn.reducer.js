import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    data: null,
    status: '',
    error: false,
    loading: false
}

export const signInReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.INITIATE_SIGN_IN:
            let newState = {...state, loading: true}
            return newState
        case actionTypes.SIGN_IN_SUCCESS:
            let newState = {...state, data: action.signInSuccessData, status: 'success', loading: false}
            return newState
        case actionTypes.SIGN_IN_FAILURE:
            let newState = {...state, data: action.signInFailureData, status: 'failure', error: true, loading: false}
            return newState
    }
}
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
            let loadingState = {...state, loading: true}
            return loadingState
        case actionTypes.SIGN_IN_SUCCESS:
            let successState = {...state, data: action.signInSuccessData, status: 'success', loading: false}
            return successState
        case actionTypes.SIGN_IN_FAILURE:
            let failureState = {...state, data: action.signInFailureData, status: 'failure', error: true, loading: false}
            return failureState
        case actionTypes.SIGN_OUT:
            let signoutState = {...INITIAL_STATE}
            return signoutState
        default:
            return state
    }
}
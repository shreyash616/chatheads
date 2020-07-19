import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    data: null,
    status: '',
    error: false,
    loading: false
}

export const signUpReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.INITIATE_SIGN_UP:
            let loadingState = {...state, loading: true}
            return loadingState
        case actionTypes.SIGN_UP_SUCCESS:
            let successState = {...state, data: action.signUpSuccessData, status: 'success', loading: false}
            return successState
        case actionTypes.SIGN_UP_FAILURE:
            let failureState = {...state, data: action.signUpFailureData, status: 'failure', error: true, loading: false}
            return failureState
        default:
            return state
    }
}
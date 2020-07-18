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
            let newState = {...state, loading: true}
            return newState
        case actionTypes.SIGN_UP_SUCCESS:
            let newState = {...state, data: action.signUpSuccessData, status: 'success', loading: false}
            return newState
        case actionTypes.SIGN_UP_FAILURE:
            let newState = {...state, data: action.signUpFailureData, status: 'failure', error: true, loading: false}
            return newState
    }
}
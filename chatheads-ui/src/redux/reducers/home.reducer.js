import actionTypes from '../actions/actionTypes'

const INITIAL_STATE ={
    data: null,
    status: '',
    error: false,
    loading: false
}

export const homeReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actionTypes.GET_JWT_TOKEN:
            let loadingState = {...state,loading: true}
            return loadingState
        case actionTypes.GET_JWT_TOKEN_SUCCESSFUL:            
            let successState = {...state, data: action.jwtTokenDetails, status: 'success', error: false, loading: false}
            return successState
        case actionTypes.GET_JWT_TOKEN_FAILURE:
            let failureState = {...state, data: action.jwtTokenDetails, status: 'failure', error: true, loading: false}
            return failureState
        case actionTypes.SIGN_OUT:
            return INITIAL_STATE
        default:
            return state
    }
}
    

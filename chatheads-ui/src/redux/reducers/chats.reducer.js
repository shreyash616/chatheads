import actionTypes from '../actions/actionTypes'

let INITIAL_STATE = {
    data: null,
    status: '',
    error: false,
    loading: false
}
export const searchChatheadsReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.INITIATE_SEARCH_CHATHEADS:
            let loadingState = {...state, loading:true}
            return loadingState
        case actionTypes.SEARCH_CHATHEADS_SUCCESS:
            let successState ={...state, status: 'success',loading: false, error: false, data: action.searchDetails}
            return successState
        case actionTypes.SEARCH_CHATHEADS_FAILURE:
            let failureState = {...state, status: 'failure', loading: false, error: true, data: action.searchDetails}
            return failureState
        case actionTypes.SIGN_OUT:
            return INITIAL_STATE
        default:
            return state
    }
}

export const sendMessageReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.INITIATE_SENDING_MESSAGE:
            let loadingState = {...state, loading:true}
            return loadingState
        case actionTypes.SENDING_MESSAGE_SUCCESS:
            let successState ={...state, status: 'success',loading: false, error: false, data: action.messageDetails}
            return successState
        case actionTypes.SENDING_MESSAGE_FAILURE:
            let failureState = {...state, status: 'failure', loading: false, error: true, data: action.messageDetails}
            return failureState
        case actionTypes.CLEAR_SENDING_MESSAGE_DATA:
            return INITIAL_STATE
        case actionTypes.SIGN_OUT:
            return INITIAL_STATE
        default:
            return state
    }
}

export const updateUserIdReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case actionTypes.UPDATE_USERID:
            let loadingState = {...state, loading:true}
            return loadingState
        case actionTypes.UPDATE_USERID_SUCCESS:
            let successState ={...state, status: 'success',loading: false, error: false, data: action.updateDetails}
            return successState
        case actionTypes.UPDATE_USERID_FAILURE:
            let failureState = {...state, status: 'failure', loading: false, error: true, data: action.updateDetails}
            return failureState
        case actionTypes.CLEAR_UPDATE_USERID_DATA:
            return INITIAL_STATE
        case actionTypes.SIGN_OUT:
            return INITIAL_STATE
        default:
            return state
    }
}
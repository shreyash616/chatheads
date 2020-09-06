import actionTypes from '../actions/actionTypes'
import actions from '../actions'

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
        default:
            return state
    }
}
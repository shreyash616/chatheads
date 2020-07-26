import actionTypes from './actionTypes'

export const searchChatheads = (searchDetails) =>{
    return {
        type: actionTypes.INITIATE_SEARCH_CHATHEADS,
        searchDetails
    }
}

export const searchChatheadsSuccess = (searchDetails) => {
    return {
        type:actionTypes.SEARCH_CHATHEADS_SUCCESS,
        searchDetails
    }
    
}

export const searchChatheadsFailure = (searchDetails) => {
    return {
        type:actionTypes.SEARCH_CHATHEADS_FAILURE,
        searchDetails
    }
    
}


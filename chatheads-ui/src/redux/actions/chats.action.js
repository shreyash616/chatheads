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

export const sendMessage = (messageDetails) => {    
    return {
        type: actionTypes.INITIATE_SENDING_MESSAGE,
        messageDetails
    }
}

export const sendingMessageSuccess = (messageDetails) => {
    return {
        type: actionTypes.SENDING_MESSAGE_SUCCESS,
        messageDetails
    }
}

export const sendingMessageFailure = (messageDetails) => {
    return {
        type: actionTypes.SENDING_MESSAGE_FAILURE,
        messageDetails
    }
}

export const clearSendingMessageData = () => {
    return {
        type: actionTypes.CLEAR_SENDING_MESSAGE_DATA
    }
}

export const updateUserId = (payload) => {
    return {
        type: actionTypes.UPDATE_USERID,
        payload
    }
}

export const updateUserIdSuccess = updateDetails => {
    return {
        type: actionTypes.UPDATE_USERID_SUCCESS,
        updateDetails
    }
}

export const updateUserIdFailure = updateDetails => {
    return {
        type: actionTypes.UPDATE_USERID_FAILURE,
        updateDetails
    }
}

export const clearUpdateUserIdData = () => {
    return {
        type: actionTypes.CLEAR_UPDATE_USERID_DATA
    }
}

export const getMessages = userDetails => {
    console.log(userDetails)
    return {
        type: actionTypes.GET_MESSAGES,
        userDetails
    }
}

export const getMessagesSuccess = userDetails => {
    return {
        type: actionTypes.GET_MESSAGES_SUCCESS,
        userDetails
    }
}

export const getMessagesFailure = userDetails => {
    return {
        type: actionTypes.GET_MESSAGES_FAILURE,
        userDetails
    }
}

export const markRead = userDetails => {
    return {
        type: actionTypes.MARK_READ,
        userDetails
    }
}

export const markReadSuccess = userDetails => {
    return {
        type: actionTypes.MARK_READ_SUCCESS,
        userDetails
    }
}

export const markReadFailure = userDetails => {
    return {
        type: actionTypes.MARK_READ_FAILURE,
        userDetails
    }
}

export const clearMarkReadData = () => {
    return {
        type: actionTypes.CLEAR_MARK_READ_DATA,        
    }
}
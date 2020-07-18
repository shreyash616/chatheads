import actionType from './actionTypes'

export const initiatesignUp = (signUpDetails) => {
    return {
        type: actionType.INITIATE_SIGN_UP,
        signUpDetails
    }
}

export const signUpSuccess = (signUpSuccessData) => {
    return {
        type: actionType.SIGN_UP_SUCCESS,
        signUpSuccessData
    }
}

export const signUpFailure = (signUpFailureData) => {
    return {
        type: actionType.SIGN_UP_FAILURE,
        signUpFailureData
    }
}
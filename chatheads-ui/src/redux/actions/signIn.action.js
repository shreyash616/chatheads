import actionType from './actionTypes'

export const initiateSignIn = (signInDetails) => {
    return {
        type: actionType.INITIATE_SIGN_IN,
        signInDetails
    }
}

export const signInSuccess = (signInSuccessData) => {
    return {
        type: actionType.SIGN_IN_SUCCESS,
        signInSuccessData
    }
}

export const signInFailure = (signInFailureData) => {
    return {
        type: actionType.SIGN_IN_FAILURE,
        signInFailureData
    }
}

export const signOut = () => {
    return {
        type: actionType.SIGN_OUT
    }
}
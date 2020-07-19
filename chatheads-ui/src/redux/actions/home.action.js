import actionTypes from './actionTypes'

export const getJwtToken = () =>{
    return{
        type: actionTypes.GET_JWT_TOKEN,
        authHeader: 'codered516'
    }
}

export const getJwtTokenSuccessful = (jwtTokenDetails) =>{
    return{
        type: actionTypes.GET_JWT_TOKEN_SUCCESSFUL,
        jwtTokenDetails
    }
}

export const getJwtTokenFailure = (jwtTokenDetails) =>{
    return{
        type: actionTypes.GET_JWT_TOKEN_FAILURE,
        jwtTokenDetails
    }
}
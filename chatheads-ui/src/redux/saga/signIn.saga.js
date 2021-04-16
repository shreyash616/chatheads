import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actions from '../actions/index'
import actionTypes from '../actions/actionTypes'

function * handleSignIn(action){
    
    const signInResponseData = yield axios.post(actionTypes.ONLINE_ENDPOINT+'signIn',action.signInDetails).then(response => response.data).catch(error => error)        
    
    if(signInResponseData instanceof Error){
        if(signInResponseData.response){
            yield put(actions.signInActions.signInFailure(signInResponseData.response))
        }
        else{
            yield put(actions.signInActions.signInFailure(signInResponseData.message))
        }
    }
    else{
        yield put(actions.signInActions.signInSuccess(signInResponseData))
    }
}

export function * catchInitiateSignIn(){
    yield takeEvery(actionTypes.INITIATE_SIGN_IN, handleSignIn)
}


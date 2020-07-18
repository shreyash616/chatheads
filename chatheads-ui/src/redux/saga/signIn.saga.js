import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actions from '../actions/index'
import actionTypes from '../actions/actionTypes'

function * handleSignIn(action){
    console.log(action)
    const signInResponseData = yield axios.post('http://localhost:3001/signIn',action.signInDetails).then(response => response.data).catch(error => error.response.data)
    console.log(signInResponseData)
    if(signInResponseData instanceof Error){
        yield put(actions.signInActions.signInFailure())
    }
    else{
        yield put(actions.signInActions.signInSuccess())
    }
}

export function * catchInitiateSignIn(action){
    yield takeEvery(actionTypes.INITIATE_SIGN_IN, handleSignIn)
}


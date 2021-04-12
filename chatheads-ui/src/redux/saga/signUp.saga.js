import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import actions from '../actions/index'
import actionTypes from '../actions/actionTypes'

function * handleSignUp(action){
    const signUpResponseData = yield axios.post('https://chatheads-ws.herokuapp.com/signUp',action.signUpDetails).then(response => response.data).catch(error => error)    
    
    if(signUpResponseData instanceof Error){
        if(signUpResponseData.response){
            yield put(actions.signUpActions.signUpFailure(signUpResponseData.response))
        }
        else{
            yield put(actions.signUpActions.signUpFailure(signUpResponseData.message))
        }
    }
    else{
        yield put(actions.signUpActions.signUpSuccess(signUpResponseData))
    }
}

export function * catchInitiateSignUp(){
    yield takeEvery(actionTypes.INITIATE_SIGN_UP, handleSignUp)
}


import {all} from 'redux-saga/effects'
import {catchInitiateSignIn} from './signIn.saga'

export default function * chatheadsSaga(){
    yield all([
        catchInitiateSignIn()
    ])
}
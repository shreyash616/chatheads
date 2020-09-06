import axios from 'axios'
import actions from '../actions';
import { put, takeEvery } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';


function * handleSearchChatheads(action){
    const searchData = yield axios.post('http://localhost:3001/searchChatheads',action.searchDetails).then(response => response.data).catch(error => error);
    if(searchData instanceof Error){
        if(searchData.response){
            yield put(actions.chatsActions.searchChatheadsFailure(searchData.response))
        } else {
            yield put(actions.chatsActions.searchChatheadsFailure(searchData.message))
        }
    }
    else{
        yield put(actions.chatsActions.searchChatheadsSuccess(searchData))
    }
}

export function * catchInitiateSearchChatheads(){
    yield takeEvery(actionTypes.INITIATE_SEARCH_CHATHEADS, handleSearchChatheads)
}

function * handleSendMessage(action){
    const sendMessageData = yield axios.post('http://localhost:3001/sendMessage',action.messageDetails).then(response => response.data).catch(error => error);
    if(sendMessageData instanceof Error){
        if(sendMessageData.response){
            yield put(actions.chatsActions.sendingMessageFailure(sendMessageData.response))
        } else {
            yield put(actions.chatsActions.sendingMessageFailure(sendMessageData.message))
        }
    }
    else{
        yield put(yield put(actions.chatsActions.sendingMessageSuccess(sendMessageData)))
    }
}

export function * catchInitiateSendMessage(){
    yield takeEvery(actionTypes.INITIATE_SENDING_MESSAGE, handleSendMessage)
}
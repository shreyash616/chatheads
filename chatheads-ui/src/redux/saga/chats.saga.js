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
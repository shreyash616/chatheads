import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import chatheadsSaga from './saga/index'
import reducers from './reducers/index'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers(
    {
        signIn: reducers.signInReducer,
        signUp: reducers.signUpReducer,
        homeData: reducers.homeReducer,
        searchChatheadsData: reducers.searchChatheadsReducer,
        sendMessageData: reducers.sendMessageReducer,
        updateUserIdData: reducers.updateUserIdReducer,
        getMessagesData: reducers.getMessagesReducer,
        markReadData: reducers.markReadReducer
    }
)

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(chatheadsSaga)
export default store



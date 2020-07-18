import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import chatheadsSaga from './saga/index'
import reducers from './reducers/index'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers(
    {
        signIn: reducers.signInReducer,
        signUp: reducers.signUpReducer
    }
)

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(chatheadsSaga)
export default store



/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */

import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'
import { connectRouter } from 'connected-react-router'


// reducers
import User from './reducers/User/User'
import Follow from './reducers/Follow/Follow'
import Notification from './reducers/Notification/Notification'
import Post from './reducers/Post/Post'
import Explore from './reducers/Explore/Explore'
import Group from './reducers/Group/Group'
import Message from './reducers/Message/Message'
import Setting from './reducers/Setting/Setting'
import Hashtag from './reducers/Hashtag/hashtag'
import Authentication from './reducers/Authentication/authentication'

export const history = createBrowserHistory()

const createRootReducer = (history) => combineReducers({
  Authentication,
  User,
  Follow,
  Notification,
  Post,
  Explore,
  Group,
  Message,
  Setting,
  Hashtag,
  router: connectRouter(history),
})

const encryptor = createEncryptor({
  secretKey: 'helloiusnci',
  onError: function(error) {
    // Handle the error.
  }
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
  blacklist: ['router'],
}

const rootReducer = createRootReducer(history)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlwares = applyMiddleware(routerMiddleware(history), thunk, logger)

export let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middlwares
)

export let persistor = persistStore(store)

/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */

import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'

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

const rootReducer = combineReducers({
  User,
  Follow,
  Notification,
  Post,
  Explore,
  Group,
  Message,
  Setting,
  Hashtag,
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
  transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlwares = applyMiddleware(thunk, logger)

export let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middlwares
)

export let persistor = persistStore(store)

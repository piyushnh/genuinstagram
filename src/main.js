/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */

// FOR LOGGEDIN USER
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {store} from './store/store'
import {persistor} from './store/store'
import {PersistGate} from 'redux-persist/integration/react'
import Loading from './components/others/loading'
import App from './components/App'
import 'reflect-metadata'
import './django-api/socialEngine'

let element = document.getElementById('root')
if (element) {
  ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>,
    element
  )
} else {
  // USER SYSTEM (FOR NOT-LOGGEDIN USER)
  require('./user-system/user-system')
}

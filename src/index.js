/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */

// FOR LOGGEDIN USER
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'reflect-metadata'

import { ConnectedRouter } from 'connected-react-router'
import {store, history} from './store/store'
import {persistor} from './store/store'
import {PersistGate} from 'redux-persist/integration/react'
import Loading from './components/others/loading'
import App from './components/App'
import Approutes from './routes/MainRoutes'
import './django-api/socialEngine'
import '../styles/styles.scss'


import JavascriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.addLocale(en)

let element = document.getElementById('root')
if (element) {
  ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}> 
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />

    </PersistGate>
    </ConnectedRouter>  
    </Provider>,
    element
  )
} else {
  // USER SYSTEM (FOR NOT-LOGGEDIN USER)
  require('./user-system/user-system')
}






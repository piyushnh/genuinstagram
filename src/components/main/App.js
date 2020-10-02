/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */
import { hot } from 'react-hot-loader/root'

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setFCMToken } from '../../store/actions/notification'


import Header from '../others/header/header'
import NotiSpeak from '../others/noti-speak'
import SideBar from '../others/sidebar/sidebar'
import AppRoutes from '../../routes/MainRoutes'
import initialLoad from './initialLoad'

import {requestFirebaseNotificationPermission, onMessageListener, messageListener} from '../../firebase/initializeNotifications'
import '../../firebase/initializeNotifications'
import connectNotificationSocket from '../../django-api/websocketServices/websocket'

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state = {}
  }


  componentDidMount = () => {
    messageListener()

  }

  static getDerivedStateFromProps(props, state){

    let { dispatch } = props

    if (props.authentication.authed){
        connectNotificationSocket()
        initialLoad()
        requestFirebaseNotificationPermission()
              .then((token) => {
                // eslint-disable-next-line no-console
                dispatch(setFCMToken(token))
                // dispatch({type:'SET_FCM_TOKEN', payload: token})
              })
              .catch((err) => {
                console.log(err);
              });
          
    }

    return null

  }


  render() {
    let { unreadNotifications, unreadMessages } = this.props

    
  
    return (
      <div className="app">
        {/* <Header /> */}
        <NotiSpeak un={unreadNotifications} />
        {/*<SideBar un={unreadNotifications} uc={unreadMessages} />*/}
        <AppRoutes />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  unreadNotifications: store.Notification.unreadNotifications,
  unreadMessages: store.Message.unreadMessages,
  authentication: store.Authentication.details
})

export default hot(connect(mapStateToProps)(App))
export { App as PureApp }

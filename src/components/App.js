/**
 * @author Faiyaz Shaikh <www.shtakkar@gmail.com>
 * GitHub repo: https://github.com/yTakkar/React-Instagram-Clone-2.0
 */
import { hot } from 'react-hot-loader/root'

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUnreadNotifications } from '../store/actions/notification'
import { getCurrentProfile } from '../store/actions/user'
import { fetchFriendList } from '../store/actions/friend'

import Header from './others/header/header'
import NotiSpeak from './others/noti-speak'
import SideBar from './others/sidebar/sidebar'
import AppRoutes from '../routes/MainRoutes'

class App extends Component {
  componentDidMount = () => {
    let { dispatch } = this.props
    // dispatch(getUnreadNotifications())
    // dispatch(getUnreadMessages())
    dispatch(getCurrentProfile())
    dispatch(fetchFriendList())
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
})

export default hot(connect(mapStateToProps)(App))
export { App as PureApp }

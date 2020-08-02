import React from 'react'
import { Switch, Route } from 'react-router'

import Loading from '../components/others/loading'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

import Loadable from 'react-loadable'

import Profile from '../components/profile/profile'
import Home from '../components/home/home'
import EmailVerification from '../components/email-verification/email-verification'
import Notifications from '../components/notifications/notifications'
import EditProfile from '../components/edit-profile/edit-profile'
import ViewPost from '../components/post/view-post/view-post'
import Explore from '../components/explore/explore'
import Settings from '../components/settings/settings'
import Group from '../components/group/group'
import Messages from '../components/messages/messages'
import Hashtag from '../components/hashtag/hashtag/hashtag'
import AdminLogin from '../components/admin/admin-login'
import IsAdmin from '../components/admin/is-admin'
import Error from '../components/error/error'
import Login from '../components/authentication/login'
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
} from '../components/layouts'
import TaskList from '../components/task/task-list'

// const Profile = Loadable({
//   loader: () => import('../components/profile/profile'),
//   loading: Loading,
// })
// const Home = Loadable({
//   loader: () => import('../components/home/home'),
//   loading: Loading,
// })
// const EmailVerification = Loadable({
//   loader: () => import('../components/email-verification/email-verification'),
//   loading: Loading,
// })
// const Notifications = Loadable({
//   loader: () => import('../components/notifications/notifications'),
//   loading: Loading,
// })
// const EditProfile = Loadable({
//   loader: () => import('../components/edit-profile/edit-profile'),
//   loading: Loading,
// })
// const ViewPost = Loadable({
//   loader: () => import('../components/post/view-post/view-post'),
//   loading: Loading,
// })
// const ExploreComponent = Loadable({
//   loader: () => import('../components/explore/explore'),
//   loading: Loading,
// })
// const Settings = Loadable({
//   loader: () => import('../components/settings/settings'),
//   loading: Loading,
// })
// const Group = Loadable({
//   loader: () => import('../components/group/group'),
//   loading: Loading,
// })
// const Messages = Loadable({
//   loader: () => import('../components/messages/messages'),
//   loading: Loading,
// })

// const Hashtag = Loadable({
//   loader: () => import('../components/hashtag/hashtag/hashtag'),
//   loading: Loading,
// })

// const AdminLogin = Loadable({
//   loader: () => import('../components/admin/admin-login'),
//   loading: Loading,
// })
// const IsAdmin = Loadable({
//   loader: () => import('../components/admin/is-admin'),
//   loading: Loading,
// })

// const Error = Loadable({
//   loader: () => import('../components/error/error'),
//   loading: Loading,
// })

// const Login = Loadable({
//   loader: () => import('../components/authentication/login'),
//   loading: Loading,
// })

const AppRoutes = () => (
  <div className="badshah">
    <ThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} layout={MainLayout} />
        <PrivateRoute
          path="/profile/:username"
          component={Profile}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/error/:what"
          component={Error}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/email-verification/:is"
          component={EmailVerification}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/notifications"
          component={Notifications}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/edit-profile"
          component={EditProfile}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/post/:post_id"
          component={ViewPost}
          layout={MainLayout}
        />
        <PrivateRoute path="/explore" component={Explore} layout={MainLayout} />
        <PrivateRoute
          path="/settings"
          component={Settings}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/group/:grp_id"
          component={Group}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/messages"
          component={Messages}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/hashtag/:hashtag"
          component={Hashtag}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/admin-login"
          component={AdminLogin}
          layout={MainLayout}
        />
        <PrivateRoute
          path="/is-admin"
          component={IsAdmin}
          layout={MainLayout}
        />
        <PrivateRoute path="/task" component={TaskList} layout={MainLayout} />
        <PublicRoute path="/react-login" component={Login} />
      </Switch>
    </ThemeProvider>
  </div>
)

export default AppRoutes

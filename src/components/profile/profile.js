import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import Title from '../others/title'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  forProfile,
  isPrivate,
  humanReadable,
  cLoading,
} from '../../utils/utils'
import { isAdmin } from '../../utils/admin-utils'
import { getUnreadNotifications } from '../../store/actions/notification'
import Banner from './banner/banner'
import ProfileNav from './nav'
import Nothing from '../others/nothing'
import ProfileRoutes from './profile-routes'
import { getUnreadMessages } from '../../store/actions/message'
import IsLoading from '../others/isLoading'
import { getUserProfile } from '../../store/actions/user'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }

    this.props.dispatch(getUserProfile(this.props.match.params.username))
  }

  inv_user = () => this.props.history.push('/error/user')

  componentDidMount = () => {
    let {
      match: {
        params: { username },
      },
      dispatch,
    } = this.props
    forProfile({ username, dispatch, invalidUser: this.inv_user })
    this.setState({ loading: false })

    // dispatch(getUnreadNotifications())
    // dispatch(getUnreadMessages())
  }

  // componentWillReceiveProps = ({ dispatch, match }) => {
  //   if (this.props.match.url != match.url) {
  //     forProfile({
  //       dispatch,
  //       username: match.params.username,
  //       invalidUser: this.inv_user,
  //     })
  //   }
  // }

  render() {
    let { loading } = this.state
    let {
      match: {
        url,
        params: { username },
      },
      isFollowing,
      ud: { id, firstname, surname, account_type },
      mutuals,
    } = this.props
    // let notPrivate = !isPrivate(id, isFollowing, account_type)
    let notPrivate = true

    return (
      <div>
        <Title
          value={`@${username} (${firstname} ${surname})`}
          desc={`Connect with ${username}'s profile`}
        />

        {/*<div
          className="profile-data"
          id="profile-data"
          data-get-username={username}
          data-getid={id}
        />*/}

        <IsLoading loading={loading} when="page" />

        <FadeIn duration="300ms" className={cLoading(loading)}>
          <Banner />
          <div>
            <ProfileNav url={url} user={id} />
            {/* <ProfileRoutes url={url} param={username} /> */}
          </div>
        </FadeIn>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  ud: store.User.user_details,
  mutuals: store.User.mutualUsers,
  isFollowing: store.Follow.isFollowing,
})

export default withRouter(connect(mapStateToProps)(Profile))
export { Profile as PureProfile }

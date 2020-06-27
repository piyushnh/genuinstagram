import React from 'react'
import { Me } from '../../../utils/utils'
import {isCurrentUser} from '../../../store/actions/user'
import { connect } from 'react-redux'
import { toggleFollow } from '../../../store/actions/follow'
import Unfollow from '../../others/follow/unfollow'
import Follow from '../../others/follow/follow'
import AppLink from '../../others/link/link'

const BannerFollow = ({ ud,  dispatch }) => {
  let { username,id } = ud
  let user = id ? id : 0

  let toggle = what => dispatch(toggleFollow(what))
  let isFollowing = ud.isFollowing

  return (
    <div className="pro_ff">
      {dispatch(isCurrentUser(username)) ? (
        <AppLink
          url="/edit-profile"
          label="Edit profile"
          className="pri_btn ff"
        />
      ) : isFollowing ? (
        <Unfollow
          userDetails={{ user, username }}
          unfollowed={() => toggle(false)}
          updateFollowers
        />
      ) : (
        <Follow
          userDetails={{ user, username }}
          followed={() => toggle(true)}
          updateFollowers
        />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  ud: state.User.user_details,
  // isFollowing: state.Follow.isFollowing,
})

export default connect(mapStateToProps)(BannerFollow)

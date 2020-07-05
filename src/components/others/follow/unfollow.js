import React, { Fragment, useState } from 'react'
import { unfollow } from '../../../utils/user-interact-utils'
import { number, func, bool } from 'prop-types'
import { connect } from 'react-redux'
import PrimaryButton from '../button/primary-btn'
import{unfollowUser} from'../../../store/actions/friend'

/**
 * If there's no need to update store, then only provide user (within userDetails) & followed arguements.
 */

const Unfollow = ({
  userDetails,
  dispatch,
}) => {

  let { username} = userDetails
  const [loading, setLoading] = useState(false);


  let onUnfollowUser = async e => {
    e.preventDefault()
    // let obj = {
    //   user,
    //   dispatch,
    //   update_followings: updateFollowings,
    //   update_followers: updateFollowers,
    //   done: () => unfollowed(),
    // }
    // unfollow(obj)

    setLoading(true)
    await dispatch(unfollowUser(username))
    setLoading(false)

  }

  return (
    <Fragment>
      <PrimaryButton
        label="Unfollowsdsdf"
        onClick={onUnfollowUser}
        extraClass="unfollow"
        isLoading = {loading}
      />
    </Fragment>
  )
}

Unfollow.defaultProps = {
  updateFollowings: false,
  updateFollowers: false,
}

Unfollow.propTypes = {
  //user: number.isRequired,
  // unfollowed: func.isRequired,
  updateFollowings: bool,
  updateFollowers: bool,
}

export default connect()(Unfollow)

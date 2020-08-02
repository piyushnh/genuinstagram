import React, { Component, Fragment } from 'react'
import * as PostUtils from '../../../utils/post-utils'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '../../others/icons/material-icon'
import {toggleBookmark} from '../../../store/actions/post'

class PostBookmark extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
        bookmarked: this.props.postDetails.bookmarked_or_not,
      }

    this.toggleBookmark = this.toggleBookmark.bind(this)
  }
  



  toggleBookmark = async () => {

    let {
      postDetails: { post_id },
      dispatch
    } = this.props;

    const result = await dispatch(toggleBookmark(post_id, this.state.bookmarked))
    
    if (result)
    {
      this.setState((prevState) => ({
        bookmarked: !prevState.bookmarked
      }))
    }
  }

  unbookmark = async () => {
    let {
      postDetails: { post_id, when },
      dispatch,
      ud: { id },
    } = this.props
    PostUtils.unbookmark({
      post_id,
      when,
      user: id,
      dispatch,
      done: () => this.setState({ bookmarked: false }),
    })
  }

  render() {
    let { bookmarked } = this.state

    return (
      <Fragment>
        <div className="p_bmrk_wra">
          {bookmarked ? (
            <span
              className="p_bookmark undo_bookmark"
              data-tip="Undo bookmark"
              onClick={this.toggleBookmark}
            >
              <MaterialIcon icon="bookmark" />
            </span>
          ) : (
            <span
              className="p_bookmark"
              data-tip="Bookmark"
              onClick={this.toggleBookmark}
            >
              <MaterialIcon icon="bookmark_border" />
            </span>
          )}
        </div>
      </Fragment>
    )
  }
}

// PostBookmark.propTypes = {
//   postDetails: PropTypes.shape({
//     post_id:PropTypes.number.isRequired,
//     when: PropTypes.string.isRequired,
//   }).isRequired,
// }

const mapStateToProps = store => ({
  ud: store.User.user_details,
})

export default connect(mapStateToProps)(PostBookmark)
export { PostBookmark as PurePostBookmark }

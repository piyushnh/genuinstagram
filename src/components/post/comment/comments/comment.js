import React, { Component } from 'react'
import TimeAgo from 'handy-timeago'
import { Me } from '../../../../utils/utils'
import { connect } from 'react-redux'
import CommentType from './comment-type'
import CommentOptions from './options/comment-options'
import PropTypes from 'prop-types'
import AppLink from '../../../others/link/link'
import classNames from 'classnames'
import ReactTimeAgo from 'react-time-ago'


@connect()
export default class Comment extends Component {
  state = {
    text: '',
  }

  componentDidMount = () => this.setState({ text: this.props.text })

  _toggle = what => this.setState({ [what]: !this.state[what] })

  render() {
    let {
      comment_id,
      comment_by,
      comment_by_username,
      comment_type,
      commentSrc,
      comment_time,
      decrementComments,
    } = this.props
    let { text } = this.state

    return (
      <div>
        <div className={classNames('comments', { my_comment: Me(comment_by) })}>
          <img
            className="comments_avatar"
            src={comment_by.profile_picture}
          />

          <div className="comments_content">
            <AppLink
              url={`/profile/${comment_by.username}`}
              className="comments_user"
              label={comment_by.username}
            />

            <CommentType type={comment_type} text={text} commentSrc={commentSrc} />

            <div className="comments_bottom">
              <span className="comments_time"><ReactTimeAgo date={comment_time}/></span>
            </div>

            <CommentOptions
              commentDetails={{
                comment_id,
                comment_by,
                text,
                comment_type,
                commentSrc,
              }}
              decrementComments={decrementComments}
              updateCommentText={value => this.setState({ text: value })}
            />
          </div>
        </div>
      </div>
    )
  }
}

Comment.propTypes = {
  comment_id: PropTypes.number.isRequired,
  comment_by: PropTypes.object.isRequired,
  comment_by_username: PropTypes.string,
  comment_time: PropTypes.string.isRequired,
  post_id:PropTypes.number.isRequired,
  commentSrc: PropTypes.string,
  text: PropTypes.string,
  comment_type: PropTypes.oneOf(['text', 'sticker', 'image']),
  decrementComments: PropTypes.func.isRequired,
}

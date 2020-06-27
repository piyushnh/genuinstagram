import React, { Component } from 'react'
import { connect } from 'react-redux'
import { humanReadable } from '../../../../utils/utils'
import Comments from '../../comment/comments/comments'
import ImageComment from '../../comment/image-comment/imageComment'
import StickerComment from '../../comment/sticker-comment/stickerComment'
import TextComment from '../../comment/text-comment/text-comment'
import { shape, number, string, array } from 'prop-types'
import AppLink from '../../../others/link/link'

class PostBottom extends Component {
  state = {
    comments_count: 0,
    postDetails:this.props.postDetails
  }

  componentDidMount = () =>
    this.setState({
      comments_count: this.props.postDetails.comments_count,
    })

  incrementComments = () =>
    this.setState({
      comments_count: ++this.state.comments_count,
    })

  addCommentToTop = (comment) => {
    const postDetails = this.state.postDetails
    const comments = postDetails.comments
    comments.unshift(comment)
      this.setState({
      postDetails: {...postDetails, comments:comments},
    })
  }
  render() {
    let { comments_count } = this.state
    let {
      
      session,
    } = this.props
    let {postDetails,
      postDetails: { post_id, when, comments }} = this.state

    let childProps = {
      postDetails,
      incrementComments: this.incrementComments,
      addCommentToTop: this.addCommentToTop,
    }

    return (
      <div>
        <AppLink
          url={`/post/${post_id}`}
          className="p_comments"
          label={humanReadable(comments_count, 'comment')}
        />
        <div className="p_cit">
          <div className="p_cit_img">
            <img src={`/users/${session}/avatar.jpg`} />
          </div>

          <div className="p_cit_main">
            <TextComment {...childProps} />

            <div className="p_cit_tool">
              <StickerComment {...childProps} />
              <ImageComment {...childProps} />
            </div>
          </div>
        </div>

        <Comments
          when={when}
          comments={comments}
          decrementComments={() =>
            this.setState({ comments_count: --comments_count })
          }
        />
      </div>
    )
  }
}

PostBottom.propTypes = {
  postDetails: shape({
    comments_count: number.isRequired,
    post_id: string.isRequired,
    when: string.isRequired,
    //user: number.isRequired,
    comments: array,
  }).isRequired,
}

const mapStateToProps = store => ({
  session: store.User.session.id,
})

export default connect(mapStateToProps)(PostBottom)
export { PostBottom as PurePostBottom }

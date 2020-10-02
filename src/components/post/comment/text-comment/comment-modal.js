import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import { connect } from 'react-redux'
import { textComment } from '../../../../utils/comment-utils'
import AddEmojis from '../../../others/emojis/add-emojis'
import PrimaryButton from '../../../others/button/primary-btn'
import ModalBack from '../../../others/modal/modal-back'
import TextArea from '../../../others/input/textArea'
import Overlay from '../../../others/overlay'
import { number, func, string } from 'prop-types'
import PropTypes from 'prop-types';
import {addComment} from '../../../../store/actions/post'
import Notify from 'handy-notification'


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (post_id, text) => dispatch(addComment(post_id, text)),
    

  }
}

@connect(null, mapDispatchToProps)
export default class TextCommentModal extends Component {
  state = {
    text: '',
  }

  descChange = e => this.setState({ text: e.target.value })

  comment = async e => {
    e.preventDefault()
    let { text } = this.state
    let { back, incrementComments, addCommentToTop,post, ...rest } = this.props
    // textComment({
    //   text,
    //   ...rest,
    //   done: () => incrementComments(),
    // })

    let result =await this.props.postComment(post, text)

    const {success, comment} = result

    if (success) {
      incrementComments()
      addCommentToTop(comment)
      back()
      Notify({
          value: 'Your comment is posted'
        })

    }
    // back()
  }

  render() {
    let { text } = this.state
    let { back } = this.props

    return (
      <div>

        <div className="edit_post modal">
          <FadeIn duration="300ms">
            <div className="e_p_header modal_header">
              <span className="title">Comment post</span>
            </div>

            <div className="e_p_middle modal_middle">
              <TextArea
                placeholder="Comment.."
                autoFocus
                value={text}
                valueChange={this.descChange}
                className="c_p_textarea"
              />
            </div>

            <div className="e_p_bottom modal_bottom">
              <AddEmojis
                position={{ top: -30, left: -217 }}
                textArea=".c_p_textarea"
                updateTextArea={value => this.setState({ text: value })}
                recenterEmojis
              />

              <ModalBack back={back} btnType="secondary" />
              <PrimaryButton
                label="Comment"
                onClick={this.comment}
                disabled={!text}
              />
            </div>

          </FadeIn>
        </div>
      </div>
    )
  }
}

TextCommentModal.propTypes = {
  post: number.isRequired,
  postOwner: PropTypes.object.isRequired,
  back: func.isRequired,
  incrementComments: func.isRequired,
  addCommentToTop: func.isRequired,
  when: string.isRequired,
}

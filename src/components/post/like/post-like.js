import React, { Component, Fragment } from 'react'
import * as PostUtils from '../../../utils/post-utils'
import { post } from 'axios'
import PropTypes from 'prop-types'
import MaterialIcon from '../../others/icons/material-icon'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class PostLike extends Component {
  state = {
    liked: false,
    open: false
  }

  componentDidMount = async () => {
    let {
        postDetails: { post_id },
      } = this.props,
      { data: liked } = await post('/api/liked-or-not', { post: post_id })
    await this.setState({ liked })
  }

  likeOld = async () => {
    let {
      postDetails: { post_id, user },
      incrementWhat,
    } = this.props
    PostUtils.like({
      post_id,
      user,
      done: () => {
        this.setState({ liked: true })
        incrementWhat('likes_count')
      },
    })
  }

  like = () => {
    this.setState({open: true})
  }

  unlike = async () => {
    let {
      postDetails: { post_id },
      decrementWhat,
    } = this.props
    PostUtils.unlike({
      post_id,
      done: () => {
        this.setState({ liked: false })
        decrementWhat('likes_count')
      },
    })
  }

  handleClose = () => {
      this.setState({...this.state, open: false })
    };
  render() {
    // let { liked } = this.state
    let { liked } = false

    return (
      <Fragment>
        <div className="p_Like_wra">
          {liked ? (
            <span
              className="p_like p_unlike_icon"
              data-tip="Unlike"
              onClick={this.unlike}
            >
              <MaterialIcon icon="favorite" />
            </span>
          ) : (
            <span
              className="p_like p_like_icon"
              data-tip="Like"
              onClick={this.like}
            >
              <MaterialIcon icon="favorite_border" />
            </span>
          )}
        </div>

        <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Hey there!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Let's not measure our worth in likes, shall we?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </Fragment>
    )
  }
}

PostLike.propTypes = {
  postDetails: PropTypes.shape({
    post_id:PropTypes.number.isRequired,
    // user: PropTypes.number.isRequired,
  }).isRequired,
  incrementWhat: PropTypes.func.isRequired,
  decrementWhat: PropTypes.func.isRequired,
}

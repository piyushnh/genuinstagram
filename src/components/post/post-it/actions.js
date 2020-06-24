import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
// import { addPost } from '../../../utils/post-utils'
import { CPP, resetPostIt, addPost } from '../../../store/actions/post'
import SecondaryButton from '../../others/button/secondary-btn'
import PrimaryButton from '../../others/button/primary-btn'

const PostItActions = props => {
  let {
    back,
    // group_name,
    postIt: { fileChanged, showOverlay, ...rest },
    // dispatch,
  } = props

  

  let BackAndReset = async e => {
    e ? e.preventDefault() : null
    await props.resetPostIt()
    back()
  }

  let postIt = async e => {
    e.preventDefault()
    // props.toggleOverlay(showOverlay)

    // await addPost({
    //   dispatch,
    //   ...rest,
    //   group_name,
    // })

      let {
      desc,
      targetFile,
      filter,
      location,
      type,
      group,
      tags,
      // group_name
    } =  props.postIt
// Object.assign({}, props.postIt, group_name)
    await props.addPost({
      desc,
      targetFile,
      filter,
      location,
      type,
      group,
      tags,
      // group_name
    })
    // props.toggleOverlay(showOverlay)
    // BackAndReset()
  }

  return (
    <div className="t_p_act p_act">
      <SecondaryButton label="Cancel" onClick={BackAndReset} />

      <PrimaryButton
        label="Post"
        onClick={postIt}
        disabled={!fileChanged}
        extraClass="p_post"
      />
    </div>
  )
}

PostItActions.propTypes = {
  back: func.isRequired,
}

const mapStateToProps = state => ({
  group_name: state.Group.group_details.name,
  postIt: state.Post.postIt,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPost: (postData) => dispatch(addPost(postData)),
    toggleOverlay: (showOverlay) => dispatch(CPP('showOverlay', !showOverlay)),
    resetPostIt:() => dispatch(resetPostIt())
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItActions)
export { PostItActions as PurePostItActions }

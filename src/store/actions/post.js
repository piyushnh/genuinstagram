import { dispatchHelper } from '../../utils/utils'
import { SocialProviderTypes } from '../../django-api/socialProviderTypes'
import { provider } from '../../django-api/socialEngine'
import Notify from 'handy-notification'
import { push } from 'connected-react-router'


const postService = provider.get(SocialProviderTypes.PostService)

export const getUserPosts = username =>
  dispatchHelper('GET_USER_POSTS', 'get-user-posts', { username })

export const getBookmarkedPosts = user =>
  dispatchHelper('GET_BOOKMARKED_POSTS', 'get-bookmarked-posts', { user })

export const getTaggedPosts = user =>
  dispatchHelper('GET_TAGGED_POSTS', 'get-tagged-posts', { user })

export const getSharedPosts = user =>
  dispatchHelper('GET_SHARED_POSTS', 'get-shared-posts', { user })

export const getPhotos = user =>
  dispatchHelper('GET_PHOTOS', 'get-photos', { user })

// export const getFeed = () => dispatchHelper('GET_FEED', 'get-feed')

export const getGroupPosts = group =>
  dispatchHelper('GET_GROUP_POSTS', 'get-group-posts', { group })

export const addUserPost = post => {
  return {
    type: 'ADD_USER_POST',
    payload: post,
  }
}

export const addGroupPost = post => {
  return {
    type: 'ADD_GROUP_POST',
    payload: post,
  }
}

export const getGroupPhotos = group =>
  dispatchHelper('GET_GROUP_PHOTOS', 'get-group-photos', { group })



export const editPost = post_details => {
  return {
    type: 'EDIT_POST',
    payload: post_details,
  }
}

export const deletePost = post => {
  return {
    type: 'DELETE_POST',
    payload: post,
  }
}

export const getFeed = (feed) => {
  return {
    type: 'GET_FEED',
    payload: feed,
  }
}

export const getPostLikes = post =>
  dispatchHelper('GET_POST_LIKES', 'get-post-likes', { post })

export const removeLike = like_id =>
  dispatchHelper('REMOVE_LIKE', 'remove-like', { like_id })

export const getPostTags = post =>
  dispatchHelper('GET_POST_TAGS', 'get-post-tags', { post })

export const untag = user => {
  return {
    type: 'UNTAG',
    payload: user,
  }
}

export const getUsersToShare = post =>
  dispatchHelper('GET_USERS_TO_SHARE', 'get-users-to-share', { post })

export const getPostSharers = post =>
  dispatchHelper('GET_POST_SHARERS', 'get-post-sharers', { post })

export const unbookmark = post => {
  return {
    type: 'UNBOOKMARK',
    payload: post,
  }
}

export const removeShare = share_id => {
  return {
    type: 'REMOVE_SHARE',
    payload: share_id,
  }
}

export const comment = comment => {
  return {
    type: 'COMMENT',
    payload: comment,
  }
}

export const deleteComment = comment_id => {
  return {
    type: 'DELETE_COMMENT',
    payload: comment_id,
  }
}

export const editComment = comment => {
  return {
    type: 'EDIT_COMMENT',
    payload: comment,
  }
}

// CHANGE POST IT PROPERTIES
export const CPP = (what, value) => {
  return {
    type: 'CHANGE_POSTIT_PROPS',
    payload: { what, value },
  }
}

export const resetPostIt = () => {
  return {
    type: 'RESET_POSTIT',
  }
}


export const getTimeline = () => {
   return (dispatch, getState) => {
    // dispatch(globalActions.showNotificationRequest())

  
    return postService.getTimeline().then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
        const data = result.data
        let feed = []
        
        for (const index in data){
          let activity = data[index]
          feed.push(activity.post)
        }



        dispatch(getFeed(feed))
        // dispatch(push('/'))
      }
      else {
        Notify({
          value: result.mssg
        })
      }
     
    })
      .catch((error) => {
        // An error happened.
        console.log(error)
        Notify({
          value: 'Something went wrong'
        })


      })
  }
}

export const  addPost = (postData) => {
   return (dispatch, getState) => {
    // dispatch(globalActions.showNotificationRequest())
    // console.log()

    const payLoad = new FormData();

    payLoad.set('image', postData.targetFile);
    payLoad.set('description', postData.desc);
    payLoad.set('location', postData.location);
    payLoad.set('privacy_type', 'FOLLOWERS');


    return postService.addPost(payLoad).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
        

        dispatch(push(`/post/${result.data.post_id}`))
      }
      else {
        Notify({
          value: result.mssg
        })
      }
     
    })
      .catch((error) => {
        // An error happened.
        console.log(error)
        Notify({
          value: 'Something went wrong'
        })


      })
  }
}

// export const getPost = post_id =>
//   dispatchHelper('GET_POST', 'get-post', { post_id })


export const  getPost = (postId) => {
   return (dispatch, getState) => {
   
    return postService.getPost(postId).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
        const postData = result.data;


         dispatch({ type: 'GET_POST' , payload: postData })
      }
      else {
        Notify({
          value: result.mssg
        })
      }
     
    })
      .catch((error) => {
        // An error happened.
        console.log(error)
        Notify({
          value: 'Something went wrong'
        })
      })
  }
}

export const  addComment = (postId, text) => {
   return (dispatch, getState) => {
   
    return postService.addComment(postId, text).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
        const commentData = result.data;


        //  dispatch({ type: 'GET_POST' , payload: postData })

         return {success: true, comment: commentData}
      }
      else {
        Notify({
          value: result.mssg
        })

         return {success: false, comment: null}

      }
     
    })
      .catch((error) => {
        // An error happened.
        console.log(error)
        Notify({
          value: 'Something went wrong'
        })

         return {success: false, comment: null}



      })
  }
}

export const  toggleBookmark = (postId, isBookmarked) => {
   return (dispatch, getState) => {
   
    return postService.toggleBookmark(postId, isBookmarked).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        return true     
      }
      else {
        Notify({
          value: result.mssg
        })

         return false

      }
     
    })
      .catch((error) => {
        // An error happened.
        console.log(error)
        Notify({
          value: 'Something went wrong'
        })

         return false



      })
  }
}




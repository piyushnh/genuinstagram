import { dispatchHelper } from '../../utils/utils'
import { SocialProviderTypes } from '../../django-api/socialProviderTypes'
import { provider } from '../../django-api/socialEngine'
import Notify from 'handy-notification'
import { push } from 'connected-react-router'


const friendService = provider.get(SocialProviderTypes.FriendService)



export const toggleIsFollowing = f => {
  return {
    type: 'IS_FOLLOWING_TOGGLE',
    payload: f,
  }
}
export const changeFriendshipStatus = f => {
  return {
    type: 'CHANGE_FRIEND_STATUS',
    payload: f,
  }
}

export const Follower = follower => {
  return {
    type: 'FOLLOWER',
    payload: follower,
  }
}

export const Unfollower = unfollower => {
  return {
    type: 'UNFOLLOWER',
    payload: unfollower,
  }
}

export const Following = following => {
  return {
    type: 'FOLLOWING',
    payload: following,
  }
}

export const Unfollowing = unfollowing => {
  return {
    type: 'UNFOLLOWING',
    payload: unfollowing,
  }
}

export const removeFavourites = fav_id => {
  return {
    type: 'REMOVE_FAVOURITES',
    payload: fav_id,
  }
}

export const getUsersToRecommend = user =>
  dispatchHelper('USERS_TO_RECOMMEND', 'get-users-to-recommend', { user })

export const removeRecommendation = recommend_id => {
  return {
    type: 'REMOVE_RECOMMENDATION',
    payload: recommend_id,
  }
}

export const  followUser = (username) => {
   return (dispatch, getState) => {
   
    return friendService.followUser(username).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
         dispatch(toggleIsFollowing(true))
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
export const  unfollowUser = (username) => {
   return (dispatch, getState) => {
   
    return friendService.unfollowUser(username).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
         dispatch(toggleIsFollowing(false))
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
export const  friendActions = (username, actionType) => {
   return (dispatch, getState) => {
   

      
    return friendService.friendActions(username, actionType).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
         switch (type) {

      case "SEND_REQUEST": dispatch(changeFriendshipStatus('REQUEST_SENT'))
        break;
      case "ACCEPT_REQUEST": dispatch(changeFriendshipStatus('ARE_FRIENDS'))
        break;
      case "CANCEL_REQUEST": dispatch(changeFriendshipStatus('NONE'))
        break;
      case "REJECT_REQUEST": url = ''
        break;
      case "REMOVE_FRIEND": dispatch(changeFriendshipStatus('NONE'))
        break;

      // default:      return <h1>No project match</h1>
    }
         
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
// export const  unfriendUser = (username) => {
//    return (dispatch, getState) => {
   
//     return friendService.unfriendUser(username).then((result) => {
//       // Send email verification successful.
//       if (result.success)
//       {
        
//          dispatch(changeFriendshipStatus('NONE'))
//       }
//       else {
//         Notify({
//           value: result.mssg
//         })
//       }
     
//     })
//       .catch((error) => {
//         // An error happened.
//         console.log(error)
//         Notify({
//           value: 'Something went wrong'
//         })
//       })
//   }
// }

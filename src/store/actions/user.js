import { dispatchHelper } from '../../utils/utils'
import { SocialProviderTypes } from '../../django-api/socialProviderTypes'
import { provider } from '../../django-api/socialEngine'
import Notify from 'handy-notification'
import { push } from 'connected-react-router'


const userService = provider.get(SocialProviderTypes.UserService)

export const getUserDetails = username =>
  dispatchHelper('GET_USER_DETAILS', 'get-user-details', { username })

export const deleteTag = tag => {
  return {
    type: 'DELETE_TAG',
    payload: tag,
  }
}

export const addTag = tag => {
  return {
    type: 'ADD_TAG',
    payload: tag,
  }
}

export const getMutualUsers = username =>
  dispatchHelper('GET_MUTUAL_USERS', 'get-mutual-users', { username })


export const  getCurrentProfile = () => {
   return (dispatch, getState) => {
   

    return userService.getProfile().then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
        const profileData = result.data;

         dispatch({ type: 'GET_CURRENT_PROFILE' , payload: profileData })
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

export const  getUserProfile = (userName) => {
   return (dispatch, getState) => {
   

    return userService.getUserProfile(userName).then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        
        // const profileData = result.data;

         dispatch({ type: 'GET_USER_DETAILS' , payload: result.data })
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
export const  isCurrentUser = (userName) => {
   return (dispatch, getState) => {
   
   const currentUsername = getState().Authentication.details.username

   if (currentUsername === userName){
     return true
   }
   else{
     return false
   }




  }
}





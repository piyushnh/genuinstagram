import { SocialProviderTypes } from '../django-api/socialProviderTypes'
import { provider } from '../django-api/socialEngine'
import {AuthenticateActionType} from './actionTypes/authenticationType'

import Notify from 'handy-notification'
import { push } from 'connected-react-router'



const authorizeService = provider.get(SocialProviderTypes.AuthorizeService)

export const login = (user_id, username, authToken, firstName, lastName, email, isVerified ) => {
  return {
    type: AuthenticateActionType.LOGIN,
    payload: { authed: true, isVerified, userId: user_id,username, authToken, firstName,
              lastName, email }
  }
}

export const onGoogleLogin = () => {
   return (dispatch, getState) => {
    // dispatch(globalActions.showNotificationRequest())

    return authorizeService.loginWithOAuth().then((result) => {
      // Send email verification successful.
      if (result.success)
      {
        Notify({
          value: 'Welcome!'
        })
        const user = result.data.user
        dispatch(login(user.user_id, user.username, result.data.token, user.first_name, user.last_name,
         user.email,  true))
        dispatch(push('/'))
      }
      else {
        Notify({
          value: 'Something went wrong'
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
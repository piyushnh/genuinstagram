import { dispatchHelper } from '../../utils/utils'
import { SocialProviderTypes } from '../../django-api/socialProviderTypes'
import { provider } from '../../django-api/socialEngine'
import Notify from 'handy-notification'


const notificationService = provider.get(SocialProviderTypes.NotificationService)

export const getNotifications = () =>
  dispatchHelper('GET_NOTIFICATIONS', 'get-notifications')

export const clearNotifications = () =>
  dispatchHelper('CLEAR_NOTIFICATIONS', 'clear-notifications')

export const getUnreadNotifications = () =>
  dispatchHelper('GET_UNREAD_NOTIFICATIONS', 'get-unread-notifications')

export const readNotifications = () =>
  dispatchHelper('READ_NOTIFICATIONS', 'read-notifications')

export const  setFCMToken = (token) => {
   return (dispatch, getState) => {
   
    return notificationService.setFCMToken(token).then((result) => {
      if (result.success)
      {
 
        dispatch({type:'SET_FCM_TOKEN', payload: token})

      }
      
     
    })
      .catch((error) => {
        // An error happened.
        console.log(error)
        // Notify({
        //   value: 'Something went wrong'
        // })
      })
  }
}


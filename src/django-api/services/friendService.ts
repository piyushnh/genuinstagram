import { SocialProviderTypes } from '../socialProviderTypes';
import { injectable, inject } from 'inversify'

// import { provider } from '../socialEngine'

// const httpService = provider.get(SocialProviderTypes.HttpService)


/**
 * Firbase authorize service
 *
 * @export
 * @class AuthorizeService
 * @implements {IAuthorizeService}
 */



@injectable()
export class FriendService {


  constructor(
  ) {

  }
  @inject(SocialProviderTypes.HttpService) httpService

  getFriendsList = async () => {

    try {
      const result = await this.httpService.getWithAuth(`friendship/getFriendsList/`)
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Sorry! Unable to fetch friends list',
          success: false,
          data: null
        }

      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }
  getFriendRequests = async () => {

    try {
      const result = await this.httpService.getWithAuth(`friendship/getFriendRequestsList/`)
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Sorry! Unable to fetch friend requests list',
          success: false,
          data: null
        }

      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }
  followUser = async (userName) => {

    try {
      const result = await this.httpService.postWithAuth(`friendship/follower/add/${userName}/`, {})
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Sorry! Unable to follow the user',
          success: false,
          data: null
        }

      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }
  unfollowUser = async (userName) => {

    try {
      const result = await this.httpService.postWithAuth(`friendship/follower/remove/${userName}/`, {})
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Sorry! Unable to unfollow the user',
          success: false,
          data: null
        }

      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }
  friendActions = async (userName, type) => {
    let url;

    switch (type) {

      case "SEND_REQUEST": url = `friendship/friend/add/${userName}/`
        break;
      case "ACCEPT_REQUEST": url = `friendship/friend/accept/${userName}/`
        break;
      case "CANCEL_REQUEST": url = `friendship/friend/cancel_request/${userName}/`
        break;
      case "REJECT_REQUEST": url = ''
        break;
      case "REMOVE_FRIEND": url = `friendship/friend/remove/${userName}/`
        break;

      // default:      return <h1>No project match</h1>
    }

    try {
      const result = await this.httpService.postWithAuth(url, {})
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Sorry! Unable to finish action',
          success: false,
          data: null
        }

      }
    }
    catch (error) {
      console.log(error)
      throw error
    }
  }






}





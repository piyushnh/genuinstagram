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
export class UserService {


  constructor(
  ) {

  }
  @inject(SocialProviderTypes.HttpService) httpService



  getProfile = async () => {

    try {
      const result = await this.httpService.getWithAuth(`user/ownerProfile/`)
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Unable to fetch News Feed',
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
  getUserProfile = async (userName) => {

    try {
      const result = await this.httpService.getWithAuth(`user/profile/${userName}/`)
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Unable to fetch News Feed',
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





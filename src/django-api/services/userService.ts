import { SocialProviderTypes } from '../socialProviderTypes';
import { injectable, inject } from 'inversify'
import { firebaseAuth } from '../firebaseConfig'

// import { provider } from '../socialEngine'

// const httpService = provider.get(SocialProviderTypes.HttpService)


/**
 * Firbase authorize service
 *
 * @export
 * @class AuthorizeService
 * @implements {IAuthorizeService}
 */

var GoogleProvider = new firebaseAuth.GoogleAuthProvider()
GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')

@injectable()
export class UserService {


  constructor(
  ) {

  }
  @inject(SocialProviderTypes.HttpService) httpService



  getProfile = async () => {

    try {


      // const result = await axios
      //     .post(`http://127.0.0.1:8000/auth/social/authenticate/`, payLoad)

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






}





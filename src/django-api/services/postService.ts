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
export class PostService {


  constructor(
  ) {

  }
  @inject(SocialProviderTypes.HttpService) httpService



  getTimeline = async () => {

    try {


      // const result = await axios
      //     .post(`http://127.0.0.1:8000/auth/social/authenticate/`, payLoad)

      const result = await this.httpService.getWithAuth(`post/getTimeline/`)
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

  addPost = async (postData) => {

    try {


      // const result = await axios
      //     .post(`http://127.0.0.1:8000/auth/social/authenticate/`, payLoad)


      let payLoad = {
        description: postData.desc,
        image: postData.targetFile,
        location: postData.location,
        privacy_type: 'FRIENDS'



      }

      const result = await this.httpService.postWithAuth(`post/publishPost/`, payLoad)
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        }
      }
      else {
        return {
          mssg: 'Unable to post',
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

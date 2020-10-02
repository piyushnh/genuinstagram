import { SocialProviderTypes } from '../socialProviderTypes';
import { injectable, inject } from 'inversify'
import { firebaseAuth } from '../../firebase/firebaseConfig'

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
export class AuthorizeService {


  constructor(
  ) {

  }
  @inject(SocialProviderTypes.HttpService) httpService

  loginWithOAuth = async () => {

    try {

      var GoogleProvider = new firebaseAuth.GoogleAuthProvider();
      GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      const result = await firebaseAuth().signInWithPopup(GoogleProvider)

      // The signed-in user info.
      const user = result.user
      const { credential } = result
      const { uid, displayName, email, photoURL } = user
      const { providerId } = credential
      // this.storeUserProviderData(uid, email!, displayName!, photoURL!, providerId, 'No Access token provided!')
      // this.storeUserInformation(uid,email,displayName,photoURL).then(resolve)
      const backendResult = await this.loginAtBackend(email, displayName, photoURL)
      // console.log(backendResult.data)

      if (backendResult.status === 200) {
        return {
          mssg: `Welcome ${displayName}!!`,
          success: true,
          data: backendResult.data
        }
      }
      else {
        return {
          mssg: 'Something went wrong!',
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

  loginAtBackend = async (email, fullName, avatar) => {

    try {
      const idToken = await firebaseAuth().currentUser.getIdToken(/* forceRefresh */ true)

      let payLoad = {
        'access_token': idToken,
        'email': email,
        'fullName': fullName,
        'avatar': avatar
      }


      // const result = await axios
      //     .post(`http://127.0.0.1:8000/auth/social/authenticate/`, payLoad)

      const result = await this.httpService.post(`auth/social/authenticate/`, payLoad)
      return result
    }
    catch (error) {
      console.log(error)
      throw error
    }


  }

  logout = async (fcmToken) => {

    try {
      const result = await this.httpService.postWithAuth(`auth/logout/`, { fcmToken: fcmToken })
      if (result.status === 200) {
        return {
          success: true,
        }
      }
      else {
        return {
          mssg: 'Unable to logout',
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

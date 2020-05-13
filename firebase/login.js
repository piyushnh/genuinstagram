import {firebaseAuth} from './index';
import Notify from 'handy-notification'
import axios from 'axios'


var GoogleProvider = new firebaseAuth.GoogleAuthProvider();
GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const loginAtBackend = async (email, fullName, avatar) => {

      try {
        const idToken = await firebaseAuth().currentUser.getIdToken(/* forceRefresh */ true)
      
      let payLoad = {'access_token': idToken,
                     'email': email,
                     'fullName': fullName,
                     'avatar': avatar 
                     } 
    

        const result = await axios
            .post(`http://127.0.0.1:8000/auth/social/authenticate/`, payLoad)
          
        return result
      }
      catch (error) {
        console.log(error)
        throw error
      } 
   
      
}

export const loginWithOAuth = async () => {
    
        try {
        const result = await firebaseAuth().signInWithPopup(GoogleProvider)

        // The signed-in user info.
        const user = result.user
        const { credential } = result
        const { uid, displayName, email, photoURL } = user
        const { providerId } = credential
        // this.storeUserProviderData(uid, email!, displayName!, photoURL!, providerId, 'No Access token provided!')
        // this.storeUserInformation(uid,email,displayName,photoURL).then(resolve)
        const backendResult = await loginAtBackend(email, displayName, photoURL)
        console.log(backendResult)
        
        if (backendResult.status === 200)
        {
          return {
            mssg: `Welcome ${displayName}!!`,
            success: true,
          }
        }  
        else {
          return {
            mssg: 'Something went wrong!',
            success: false
          }
        }
        }
        

      catch (error) {
        console.log(error)
        throw error
        } 

      
  }




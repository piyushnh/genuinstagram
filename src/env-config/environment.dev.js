// import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyD5bPaOO1fukhR4WNMbwyGhWd5D3yjIk3k',
    authDomain: 'journal-dev-253621.firebaseapp.com',
    databaseURL: 'https://journal-dev-253621.firebaseio.com',
    projectId: 'journal-dev-253621',
    storageBucket: 'journal-dev-253621.appspot.com',
    messagingSenderId: '487329390860',
    appId: '1:487329390860:web:744c5ace640af735d46929'
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    // defaultLanguage: LanguageType.English,
    api: 'http://127.0.0.1:8000/',
    websocketApi: 'ws://127.0.0.1:8000/',
    gateway: 'http://localhost:3001',
    prettyURL: false,

  },
  rewrites:{
    "profile": "auth/profile",
    "my": "profile/my",
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
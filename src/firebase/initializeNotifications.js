// import firebase from "firebase";

import {messaging} from './firebaseConfig'

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
   messaging
      .getToken()
      .then(token => {
         //you probably want to send your new found FCM token to the
         //application server so that they can send any push
         //notification to you.
         resolve(token)
       })
      .catch(error => {
         if (error.code === "messaging/permission-blocked") {
            reject("Please Unblock Notification Request Manually");
         } else {
            reject("Error Occurred", error);
         }
        });
  });

// export const onMessageListener = () =>
//   new Promise((resolve, reject) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     }).catch(error => {
//       console.log(error)
//     });
//   });


   messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.',refreshedToken);
    
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});

export const messageListener = () => {
messaging.onMessage(payload => {
      console.log("Notification Received", payload);
      //this is the function that gets triggered when you receive a 
      //push notification while you’re on the page. So you can 
      //create a corresponding UI for you to have the push 
      //notification handled.
   });
}

   


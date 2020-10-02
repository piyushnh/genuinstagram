importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

let firebaseConfig = {
 apiKey: 'AIzaSyD5bPaOO1fukhR4WNMbwyGhWd5D3yjIk3k',
    authDomain: 'journal-dev-253621.firebaseapp.com',
    databaseURL: 'https://journal-dev-253621.firebaseio.com',
    projectId: 'journal-dev-253621',
    storageBucket: 'journal-dev-253621.appspot.com',
    messagingSenderId: '487329390860',
    appId: '1:487329390860:web:744c5ace640af735d46929'
  }


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
   const title = payload.notification.title;
   console.log('payload', payload.notification.icon);
   const options = {
      body: payload.notification.body,
      icon: payload.notification.icon
   }
   return self.registration.showNotification(title, options);
})

self.addEventListener("notificationclick", function(event) {
//    const clickedNotification = event.notification;
//    clickedNotification.close();
//    const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//         })
//        .then(windowClients => {
//            let matchingClient = null;
//            for (let i = 0; i < windowClients.length; i++) {
//                const windowClient = windowClients[i];
//                if (windowClient.url === feClickAction) {
//                    matchingClient = windowClient;
//                    break;
//                }
//            }
//            if (matchingClient) {
//                return matchingClient.focus();
//            } else {
//                return clients.openWindow(feClickAction);
//            }
//        });
//        event.waitUntil(promiseChain);
});



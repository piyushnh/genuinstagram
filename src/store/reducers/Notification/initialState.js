// class NotificationsMap {
//   constructor() {
//     this.notifList = new Map()
//   }

//   addNotif(notif) {
//     this.list[notif.category] = notif
//   }

//   setNotifs(notifs) {
//     this.notifList = new Map(notifs.map(notif => [notif.category, notif]))
//   }
// }

export let initialState = {
  fcm_token: '',
  notifications: [],
  unreadNotifications: 0,
}

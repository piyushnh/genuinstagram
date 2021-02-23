export const addNotification = (notifications, payLoad) => {
  let updated = notifications.filter(
    notif => notif.group !== payLoad.group && !notif.is_seen
  )
  updated.push(payLoad)
  return updated
}

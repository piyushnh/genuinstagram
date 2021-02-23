import config from '../../env-config'
import { store } from '../../store/store'

const connectNotificationSocket = () => {
  var authToken = store.getState().Authentication.details.authToken

  var socket = new WebSocket(
    `${config.settings.websocketApi}ws/getNotifications/?token=${authToken}`
  )

  socket.onopen = function(e) {
    console.log('[open] Connection established')
  }

  socket.onmessage = function(event) {
    // console.log(`[message] Data received from server: ${event.data}`);
    store.dispatch({
      type: 'ADD_TO_NOTIFICATIONS',
      payload: JSON.parse(event.data),
    })
  }

  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(
        `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
      )
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died')
    }
  }

  socket.onerror = function(error) {
    console.log(`[error] ${error.message}`)
  }

  const onVisibilityChange = () => {
    console.log('changed')
    console.log(document.hidden)
    if (!document.hidden && socket.readyState === WebSocket.CLOSED) {
      socket = new WebSocket(
        `${config.settings.websocketApi}ws/getNotifications/?token=${authToken}`
      )
    }
  }

  document.addEventListener('visibilitychange', onVisibilityChange)
}

export default connectNotificationSocket

import { store } from '../../store/store'
import { getCurrentProfile } from '../../store/actions/user'
import { fetchFriendList } from '../../store/actions/friend'
import { fetchFriendRequests } from '../../store/actions/friend'
import { fetchNotifications } from '../../store/actions/notification'

const initialLoad = () => {
  store.dispatch(getCurrentProfile())
  store.dispatch(fetchFriendList())
  store.dispatch(fetchFriendRequests())
  store.dispatch(fetchNotifications())
}

export default initialLoad

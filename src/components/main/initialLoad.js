import {store} from '../../store/store'
import { getCurrentProfile } from '../../store/actions/user'
import { fetchFriendList } from '../../store/actions/friend'
import { fetchFriendRequests } from '../../store/actions/friend'



const initialLoad = () => {

  
        store.dispatch(getCurrentProfile())
        store.dispatch(fetchFriendList())
        store.dispatch(fetchFriendRequests())
}

export default initialLoad
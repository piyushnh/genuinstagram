/* eslint indent:0 */
/* eslint no-unreachable:0 */

import initialState from './initialState'
import * as methods from './methods'

export default (state = initialState, action) => {
  let py = action.payload

  switch (action.type) {
    case 'GET_FRIENDS_LIST':
      return { ...state, friendsList: py }
      break
    case 'GET_FRIENDREQUESTS_LIST':
      return { ...state, friendRequestsList: py }
      break
    case 'ADD_FRIEND_REQUEST':
      return {
        ...state,
        friendRequestsList: methods.addFriendRequest(
          state.friendRequestsList,
          py
        ),
      }
  }
  return state
}

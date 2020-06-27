/* eslint indent:0 */
/* eslint no-unreachable:0 */

import InitialState from './intialState'
import * as methods from './methods'

export default (state = InitialState, action) => {
  let py = action.payload

  switch (action.type) {
    case 'GET_USER_DETAILS':
      return {
        ...state,
        user_details: py
        // tags: py.tags,
      }
      break
    case 'GET_CURRENT_PROFILE':
      return {
        ...state,
        current_profile: py
        // tags: py.tags,
      }
      break

    case 'ADD_TAG':
      return { ...state, tags: methods.addTag(state.tags, py) }
      break

    case 'DELETE_TAG':
      return { ...state, tags: methods.deleteTag(state.tags, py) }
      break

    case 'GET_MUTUAL_USERS':
      return { ...state, mutualUsers: py }
      break
    case 'IS_FOLLOWING_TOGGLE':
      return {
        ...state,
        user_details: {...state.user_details, isFollowing: py}
        // tags: py.tags,
      }
      break
    case 'CHANGE_FRIEND_STATUS':
      return {
        ...state,
        user_details: {...state.user_details, friendshipStatus: py}
        // tags: py.tags,
      }
      break
  }

  return state
}

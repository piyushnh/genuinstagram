/* eslint indent:0 */
/* eslint no-unreachable:0 */

import InitialState from './intialState'
import * as methods from './methods'

export default (state = InitialState, action) => {
  let payload = action.payload

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        details: payload,
      }
    break

   
  }

  return state
}

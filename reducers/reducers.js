import { INCREMENT_COUNT } from '../constants/ActionTypes'

const initialState = 
 { count : 0 } 


export default function counterReducer(state = initialState, action) {
  switch (action.type) {

    case INCREMENT_COUNT:
      console.log('IN red')
      console.log(state.count)
      debugger
      return {
        ...state,
      
        count : action.inc+state.count
      
      }

    default:
      return state
  }


}

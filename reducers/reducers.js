import { INCREMENT_COUNT, DECREMENT_COUNT } from '../constants/ActionTypes'

const initialState = 
 { count : 0 } 


export default function counterReducer(state = initialState, action) {
  switch (action.type) {

    case INCREMENT_COUNT:
      console.log(state.count)
      debugger
      return {
        ...state,
      
        count : action.value+state.count
      
      }

    case DECREMENT_COUNT:
          console.log(state.count)
          debugger
          return {
            ...state,
          
            count : state.count-action.value
          
          }

    default:
      return state
  }


}

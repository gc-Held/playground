import * as types from '../constants/ActionTypes'


export function inc() {
	console.log("Cleared all!")
  	return { type: types.INCREMENT_COUNT, inc : 1 }
}

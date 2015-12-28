import * as types from '../constants/ActionTypes'


export function inc() {
	console.log("Cleared all!")
  	return { type: types.INCREMENT_COUNT, value : 1 }
}

export function dec() {
	console.log("Cleared all!")
  	return { type: types.DECREMENT_COUNT, value : 1 }
}

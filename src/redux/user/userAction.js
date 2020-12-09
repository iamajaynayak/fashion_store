import { userActionType } from './userActionType.js'

export const setCurrentUser = user => ({
	type : userActionType.SET_CURRENT_USER,
	payload : user
})
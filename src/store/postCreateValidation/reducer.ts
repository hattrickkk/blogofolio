
import { CreatePostValidationActionType, CreatePostValidationStateType } from "./types"

const initValue = {
	title: '',
	lesson_num: '',
	description: '',
	text: '',
	image: ''
}
export const createPostValidationReducer = (state: CreatePostValidationStateType = initValue, action: CreatePostValidationActionType): CreatePostValidationStateType => {
	switch (action.type) {
		case 'UPDATE_STORE':
			return {
				...state,
				[action.payload.name]: action.payload.value
			}
		default:
			return state
	}
}
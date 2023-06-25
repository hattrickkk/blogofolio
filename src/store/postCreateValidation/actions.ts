import { CreatePostValidationActionType } from "./types"

export const updateCreatePostValidationStore = (name: string, value: string): CreatePostValidationActionType => {
	return {
		type: 'UPDATE_STORE',
		payload: {
			name,
			value
		}
	}
}
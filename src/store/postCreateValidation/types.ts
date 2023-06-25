import { type } from "os"

export type CreatePostValidationStateType = {
	title: string
	lesson_num: string
	description: string
	text: string
	image: string
}

export type CreatePostValidationActionType = {
	type: string
	payload: {
		name: string
		value: string
	}
}
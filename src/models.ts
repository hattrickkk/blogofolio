export type PostType = {
	id: number
	image: string
	text: string
	date: string,
	lesson_num: number,
	title: string,
	description: string
	author: string

	likes: number
	dislikes: number
	isLiked: boolean
	isDisliked: boolean

	isFavorite: boolean
}

export type UserType = {
	id: string
	username: string
	email: string
}
export type ErrorMessageType = {
	[key: string]: string[] | string
}

export type FormType = {
	username: string
	email: string
	password: string
	confirmPassword: string
}
export type FormErrorsType = Partial<Record<keyof FormType, string>>  /* & {g: string} */

export type ActivationType = {
	uid: string
	token: string
}
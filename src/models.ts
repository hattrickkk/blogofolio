export type PostType = {
	id: number
	image: string
	text: string
	date: string,
	lesson_num: number,
	title: string,
	description: string
	author: string
}

export type UserType = {
	id: string
	username: string
	email: string
}
export type ErrorMessageType = {
	[key: string]: string[] | string
}
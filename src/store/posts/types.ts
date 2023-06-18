import { PostType } from "../../models"

export type PostsStateType = {
	list: PostType[]
}

export type PostsActionType = {
	type: string
	payload: PostType[] | number
}
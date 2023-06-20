import { PostType } from "../../models"

export type LikedPostsStateType = {
	list: PostType[]
}

export type LikedPostsActionType = {
	type: string
	payload: PostType
}
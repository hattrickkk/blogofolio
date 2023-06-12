import { PostType } from "../../models";
import { PostsActionType, PostsStateType } from "./types";

const initValue: PostsStateType = {
	list: []
}

export const postsReducer = (state: PostsStateType = initValue, action: PostsActionType): PostsStateType => {
	switch (action.type) {
		case 'LOAD_POSTS':
			return {
				list: action.payload as PostType[]
			}
		default:
			return state
	}
}
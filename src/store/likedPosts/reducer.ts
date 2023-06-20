import { PostType } from "../../models";
import { LikedPostsActionType, LikedPostsStateType } from "./types";

const likedPosts = JSON.parse(localStorage.getItem('LIKED_POSTS') as string) || []

const initValue = {
	list: likedPosts as PostType[]
}

export const likeReducer = (state: LikedPostsStateType = initValue, action: LikedPostsActionType): LikedPostsStateType => {
	switch (action.type) {
		case 'SET_AS_LIKED':
			return {
				list: [
					...state.list,
					action.payload
				]
			}
		case 'REMOVE_FROM_LIKED':
			let newArray: PostType[] = []
			state.list.forEach(item => {
				if (item.id !== action.payload.id) {
					newArray.push(item)
				}
			})
			return {
				list: newArray
			}
		default:
			return state
	}
}
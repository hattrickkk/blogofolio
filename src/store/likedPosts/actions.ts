import { PostType } from "../../models"

export const setAsLikedAction = (post: PostType) => {
	return {
		type: 'SET_AS_LIKED',
		payload: post
	}
}

export const removeFromLikedAction = (post: PostType) => {
	return {
		type: 'REMOVE_FROM_LIKED',
		payload: post
	}
}

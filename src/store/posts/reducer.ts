import { PostType } from "../../models";
import { PostsActionType, PostsStateType } from "./types";

const initValue: PostsStateType = {
	list: []
}

export const postsReducer = (state: PostsStateType = initValue, action: PostsActionType): PostsStateType => {
	switch (action.type) {
		case 'LOAD_POSTS':
			return {
				list: (action.payload as PostType[]).map(item => {
					return {
						...item,
						likes: Math.round(Math.random() * (1000)),
						dislikes: Math.round(Math.random() * 100),
						isLiked: false,
						isDisliked: false
					}
				})
			}
		case 'LIKE_POST':
			return {
				list: state.list.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							likes: (item.isLiked ? item.likes - 1 : item.likes + 1),
							dislikes: (!item.isLiked && item.isDisliked) ? item.dislikes - 1 : item.dislikes,
							isLiked: item.isLiked ? false : true,
							isDisliked: false,
						}
					}
					else {
						return item
					}
				})
			}
		case 'DISLIKE_POST':
			return {
				list: state.list.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							dislikes: (item.isDisliked ? item.dislikes - 1 : item.dislikes + 1),
							likes: (item.isLiked && !item.isDisliked) ? item.likes - 1 : item.likes,
							isDisliked: item.isDisliked ? false : true,
							isLiked: false
						}
					}
					else {
						return item
					}
				})
			}
		default:
			return state
	}
}
import { AppThunk } from ".."
import { PostType } from "../../models"
import { getPosts } from "../../services/getPosts"

export const setPosts = (posts: PostType[]) => {
	return {
		type: 'LOAD_POSTS',
		payload: posts
	}
}

export const loadPosts = (): AppThunk => {
	return async (dispatch) => {
		const posts = await getPosts(11, 494)
		dispatch(setPosts(posts as PostType[]))
	}
}

export const likePostAction = (id: number) => {
	return {
		type: 'LIKE_POST',
		payload: id
	}
}

export const unlikePostAction = (id: number) => {
	return {
		type: 'LIKE_POST',
		payload: id
	}
}


export const dislikePostAction = (id: number) => {
	return {
		type: 'DISLIKE_POST',
		payload: id
	}
}
// export const loadPosts = (): AppThunk => {
// 	return (dispatch, getState) => {
// 		getPosts()
// 			.then(res => dispatch(setPosts(res)))
// 	}
// }

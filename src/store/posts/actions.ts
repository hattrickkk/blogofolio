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
		const posts = await getPosts()
		dispatch(setPosts(posts))
	}
}

// export const loadPosts = (): AppThunk => {
// 	return (dispatch, getState) => {
// 		getPosts()
// 			.then(res => dispatch(setPosts(res)))
// 	}
// }

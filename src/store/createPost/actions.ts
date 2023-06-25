import { resolve } from "path"
import { AppThunk } from ".."
import { createPost } from "../../services/createPost"
import { getNewAcccessToken } from "../../services/getNewAccessToken"
import { updateAccessToken } from "../auth/actions"


export const addPostAction = (title: string, lesson_num: string, description: string, text: string, image: File | string, cb?: () => void): AppThunk => {
	return async (dispatch, getState) => {

		const accessToken = getState().auth.tokens?.access as string
		const response = await createPost(title, lesson_num, description, text, image, accessToken)

		if (response.status === 401) {

			console.log('token Протух')
			const refreshToken = getState().auth.tokens?.refresh as string

			// getNewAcccessToken(refreshToken)
			// 	.then(res => {
			// 		if (res.ok) {
			// 			dispatch(updateAccessToken(res.data.access as string))
			// 			dispatch(addPostAction(title, lesson_num, description, text, image))
			// 		}
			// 	})


			// new Promise(resolve => {
			// 	return getNewAcccessToken(refreshToken)
			// }).then((newResponse: any) => {
			// 	return newResponse.json()
			// }).then(res => {
			// 	if (res.ok) {
			// 		dispatch(updateAccessToken(res.data.access as string))
			// 		// dispatch(addPostAction(title, lesson_num, description, text, image))
			// 	}
			// })




			return
		}

		cb && cb()

	}
}






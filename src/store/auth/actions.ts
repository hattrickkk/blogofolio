import { AppThunk } from ".."
import { ErrorMessageType, TokensType } from "../../models"
import { logIn } from "../../services/logIn"

export const authActionName = {
	AUTH_SUCCESS: 'AUTH_SUCCESS',
	AUTH_FAILED: 'AUTH_FAILED'
}

const authSucess = (tokens: TokensType) => {
	return {
		type: authActionName.AUTH_SUCCESS,
		payload: tokens
	}
}

const authFailed = (errors: ErrorMessageType) => {
	return {
		type: authActionName.AUTH_FAILED,
		payload: errors
	}
}

export const authAction = (email: string, password: string, cb?: () => void): AppThunk => {
	debugger
	return async (dispatch) => {
		const response = await logIn(email, password)

		if (!response) {
			return dispatch(authFailed({
				error: 'Неизвестная ошибка'
			}))
		}

		if (!response.ok) {
			return dispatch(authFailed(response.data as ErrorMessageType))
		}

		dispatch(authSucess(response.data as TokensType))
		cb && cb()
	}
}
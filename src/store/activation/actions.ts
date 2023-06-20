import { AppThunk } from "..";
import { ActivationType, ErrorMessageType } from "../../models";
import { activateUser } from "../../services/activateUser";


const failedActivation = (errors: ErrorMessageType) => {
	return {
		type: 'ACTIVATION_FAILED',
		payload: errors
	}
}

export const activationAction = (uid: string, token: string, cb?: () => void): AppThunk => {
	return async (dispatch) => {
		const response = await activateUser(uid, token)

		if (!response.ok) {
			return dispatch(failedActivation(response.data as ErrorMessageType))
		}

		cb && cb()
	}
}
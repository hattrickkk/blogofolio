
import { ErrorMessageType, UserType } from "../../models";
import { RegistrationActionType } from "./types";
import { AppThunk } from "..";
import { registrateUser } from "../../services/registrateUser";

export const registrationActionName: {
	[key: string]: string
} = {
	REG_SUCCES: 'REGISTRATION_SUCCESS',
	REG_FAILED: 'REGISTRATION_FAILED'
}

const successRegistration = (user: UserType): RegistrationActionType => {
	return {
		type: registrationActionName.REG_SUCCES,
		payload: user
	}
}

const failedRegistration = (errors: ErrorMessageType): RegistrationActionType => {
	return {
		type: registrationActionName.REG_FAILED,
		payload: errors
	}
}

export const registrationAction = (username: string, email: string, password: string, cb?: () => void): AppThunk => {
	return async (dispatch) => {
		const response = await registrateUser(username, email, password)

		if (!response) {
			return dispatch(failedRegistration({
				errorMessage: 'Неизвестная ошибка'
			}))
		}
		else if (!response.ok) {
			return dispatch(failedRegistration(response.data as ErrorMessageType))
		}

		dispatch(successRegistration(response.data as UserType))
		cb && cb()
	}
}
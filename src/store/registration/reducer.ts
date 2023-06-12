
import { registrationActionName } from "./actions";
import { RegistrationActionType, RegistrationStateType } from "./types";
import { ErrorMessageType, UserType } from "../../models";

const initValue: RegistrationStateType = {
	isRegistered: false
}

export const regReducer = (state: RegistrationStateType = initValue, action: RegistrationActionType): RegistrationStateType => {
	switch (action.type) {
		case registrationActionName.REG_SUCCES:
			return {
				isRegistered: true,
				user: action.payload as UserType
			}
		case registrationActionName.REG_FAILED:
			return {
				isRegistered: false,
				errors: action.payload as ErrorMessageType
			}
		default:
			return state
	}
}
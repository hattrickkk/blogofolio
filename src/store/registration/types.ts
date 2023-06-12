import { ErrorMessageType, UserType } from "../../models"

export type RegistrationStateType = {
	isRegistered: boolean
	user?: UserType
	errors?: ErrorMessageType
}

export type RegistrationActionType = {
	type: string
	payload: UserType | ErrorMessageType | string
} 
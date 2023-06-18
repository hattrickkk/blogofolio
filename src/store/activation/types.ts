import { ActivationType, ErrorMessageType } from "../../models"

export type ActivationStateType = {
	isActivated: boolean
	activatedData?: ActivationType
	errors?: ErrorMessageType
}

export type ActivationActionType = {
	type: string
	payload?: ErrorMessageType
}
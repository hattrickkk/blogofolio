import { ActivationType, ErrorMessageType } from "../../models";
import { ActivationActionType, ActivationStateType } from "./types";

const initValue: ActivationStateType = {
	isActivated: false
}

export const activationReducer = (state: ActivationStateType = initValue, action: ActivationActionType): ActivationStateType => {
	switch (action.type) {
		case 'ACTIVATION_FAILED':
			return {
				isActivated: false,
				errors: action.payload as ErrorMessageType
			}
		default:
			return state
	}
}
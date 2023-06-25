
import { ErrorMessageType, TokensType } from "../../models";
import { authActionName } from "./actions";
import { AuthActionType, AuthStateType } from "./types";

const initValue: AuthStateType = {
	isAuth: false
}

export const authReducer = (state: AuthStateType = initValue, action: AuthActionType): AuthStateType => {
	switch (action.type) {
		case authActionName.AUTH_SUCCESS:
			return {
				isAuth: true,
				tokens: action.payload as TokensType
			}
		case authActionName.AUTH_FAILED:
			return {
				isAuth: false,
				errors: action.payload as ErrorMessageType
			}
		case authActionName.AUTH_CLEAR:
			return {
				isAuth: false,
			}
		default:
			return state
	}
}
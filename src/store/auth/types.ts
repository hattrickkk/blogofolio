import { ErrorMessageType, TokensType } from "../../models"


export type AuthStateType = {
	isAuth: boolean
	errors?: ErrorMessageType
	tokens?: TokensType
}

export type AuthActionType = {
	type: string
	payload?: TokensType | ErrorMessageType
}
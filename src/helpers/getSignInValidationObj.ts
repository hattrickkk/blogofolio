import { FormErrorsType } from "../models"

export const getSignInValidationObj = (email: string, password: string): FormErrorsType => {
	return {
		email: (email === '') ? undefined : email,
		password: (password === '') ? undefined : password,
	}

}
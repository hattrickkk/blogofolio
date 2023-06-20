import { FormErrorsType } from "../models";

export const getSignUpValidationObj = (username: string, email: string, password: string, confirmPassword: string): FormErrorsType => {
	return {
		username: (username === '') ? undefined : username,
		email: (email === '') ? undefined : email,
		password: (password === '') ? undefined : password,
		confirmPassword: (confirmPassword === '') ? undefined : confirmPassword,
	}

}

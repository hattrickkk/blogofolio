import { ErrorMessageType, UserType } from "../models"

type RegistrationResponseType = {
	ok: boolean
	status: number
	data: UserType | ErrorMessageType
}

export const registrateUser = async (username: string, email: string, password: string): Promise<RegistrationResponseType> => {
	const url = 'https://studapi.teachmeskills.by/auth/users/'
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			username,
			email,
			password
		})
	}

	try {
		const request = new Request(url, options)
		const response = await fetch(request)
		const result = await response.json()
		return {
			ok: response.ok,
			status: response.status,
			data: result
		}

	} catch (error: any) {
		return {
			ok: false,
			status: 400,
			data: error.message
		}
	}
}
import { ErrorMessageType, TokensType } from "../models"


type AuthResponseType = {
	ok: boolean
	status: number
	data: TokensType | ErrorMessageType
}

export const logIn = async (email: string, password: string): Promise<AuthResponseType> => {

	debugger
	const url = 'https://studapi.teachmeskills.by/auth/jwt/create/'
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
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
			// data: result as (TokensType | ErrorMessageType)
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
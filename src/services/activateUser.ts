import { ActivationType, ErrorMessageType } from "../models"

type ActivationResponseType = {
	ok: boolean
	status: number
	data: ActivationType | ErrorMessageType
}

export const activateUser = async (uid: string, token: string): Promise<ActivationResponseType> => {
	debugger
	const url = 'https://studapi.teachmeskills.by/auth/users/activation/'
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			uid,
			token
		} as ActivationType)
	}


	try {
		const request = new Request(url, options)
		const response = await fetch(request)
		const result = await response.json()
		return {
			ok: response.ok,
			status: response.status,
			data: result as ActivationType
		}
	} catch (error: any) {
		return {
			ok: false,
			status: 400,
			data: error.errorMessage as ErrorMessageType
		}
	}
}

// http://studapi.teachmeskills.by//activate/NjQ2NA/bpwke9-3100514557e0a1977b1448f20cfd78d7

// http://studapi.teachmeskills.by//activate/NjQ2OQ/bpydku-48aaaeecc8822e1cb13d5a80253d7ab8
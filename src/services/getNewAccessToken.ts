import { Token } from "typescript"
import { ErrorMessageType } from "../models"

type ResponseType = {
	ok: boolean
	status: number
	data: {
		access: string
	} | ErrorMessageType
}

export const getNewAcccessToken = async (refreshToken: string): Promise<ResponseType> => {
	debugger
	const url = 'https://studapi.teachmeskills.by/auth/jwt/refresh/'
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			refresh: refreshToken,
		})
	}
	console.log(options.body)
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
			status: 444,
			data: error.message
		}
	}
}
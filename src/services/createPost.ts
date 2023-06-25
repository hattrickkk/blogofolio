export const createPost = async (title: string, lesson_num: string, description: string, text: string, image: File | string, token: string) => {
	const formData = new FormData()
	formData.append('title', title)
	formData.append('lesson_num', lesson_num)
	formData.append('text', text)
	formData.append('description', description)
	formData.append('image', image)

	const url = 'https://studapi.teachmeskills.by/blog/posts/'
	const options = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: formData
	}

	try {
		const response = await fetch(new Request(url, options))
		const result = await response.json()
		return {
			ok: response.ok,
			status: response.status,
			data: result
		}
	} catch (error) {
		return {
			ok: false,
			status: 400,
			data: {
				message: 'Неизвестная ошибка'
			}
		}
	}

}
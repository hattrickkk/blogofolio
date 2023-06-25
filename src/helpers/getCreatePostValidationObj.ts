
export const getCreatePostValidationObj = (title: string, lesson_num: string, description: string, text: string, image: string) => {
	return {
		title: (title === '') ? undefined : title,
		lesson_num: (lesson_num === '') ? undefined : lesson_num,
		description: (description === '') ? undefined : description,
		text: (text === '') ? undefined : text,
		image: (image === '') ? undefined : image,
	}
}

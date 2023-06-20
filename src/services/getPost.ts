import { PostType } from "../models";

export const getPost = async (id: string): Promise<PostType> => {
	const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
	return response.json()
}
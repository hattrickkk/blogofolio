import { PostType } from "../models"

export const getPosts = async (limit: number, offset: number, search: string = ''): Promise<PostType[]> => {
	const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}`)
	const res = await response.json()
	return res.results as PostType[]
}
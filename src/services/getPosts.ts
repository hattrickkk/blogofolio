import { IPost } from "../models"

export const getPosts = async (): Promise<IPost[]> => {
	const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=0')
	const res = await response.json()
	return res.results
}
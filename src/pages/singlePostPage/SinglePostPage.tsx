import React, { useEffect, useState } from 'react'
import SinglePost from '../../components/singlePost/SinglePost'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PostType } from '../../models'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import './singlePostPage.scss'
import { getPost } from '../../services/getPost'

const SinglePostPage = () => {
	const { postId } = useParams()
	const navigate = useNavigate()

	const [post, setPost] = useState<PostType>({} as PostType)

	useEffect(() => {
		getPost(postId as string)
			.then(res => setPost(res))
	}, [])

	return (
		<div className='single-post-page'>
			<div className='container'>
				<span className='single-post-page__path'>
					<Link to='/'>Home</Link>
					{` | Post ${post.id}`}
				</span>
				<SinglePost post={post} />
			</div>
		</div >
	)
}

export default SinglePostPage
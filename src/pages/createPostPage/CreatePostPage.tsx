import React from 'react'
import CreatePost from '../../components/createPost/CreatePost'
import Title from '../../IU/title/Title'
import './createPost.scss'
import { Link } from 'react-router-dom'

const CreatePostPage = () => {
	return (
		<div className='create-post'>
			<div className='create-post__container container'>
				<span className='single-post-page__path'>
					<Link to='/'>Home</Link>
					{' | Add Post'}
				</span>
				<Title text='Add Post' className='create-post__title title' />
				<CreatePost />
			</div>

		</div>
	)
}

export default CreatePostPage
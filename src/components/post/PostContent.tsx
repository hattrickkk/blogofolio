import React, { ImgHTMLAttributes, useCallback, useEffect, useState } from 'react'
import { PostType } from '../../models'
import bookmark from '../../assets/images/Bookmark.svg'
import moreIcon from '../../assets/images/More-Horizontal.svg'
import LikeButton from '../../IU/button/LikeButton'
import DislikeButton from '../../IU/button/DislikeButton'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { dislikePostAction, likePostAction, unlikePostAction } from '../../store/posts/actions'
import { Link, useBeforeUnload } from 'react-router-dom'
import { removeFromLikedAction, setAsLikedAction } from '../../store/likedPosts/actions'
import { useSelector } from 'react-redux'


type PropsType = {
	post: PostType;
	size: 'small' | 'big' | 'medium'
}

const PostContent = ({ post, size }: PropsType) => {
	// const [isLiked, setIsLiked] = useState(post.isLiked)
	// const [isDisliked, setIsDisliked] = useState(false)

	const dispatch = useDispatch<AppDispatch>()
	const likedPosts = useSelector((state: AppState) => state.likes.list)

	const likePostHandler = () => {
		const likedPost = likedPosts.find(item => item.id === post.id)
		dispatch(likePostAction(post.id))
		if (!likedPost) {
			dispatch(setAsLikedAction(post))
		} else {
			dispatch(removeFromLikedAction(post))
		}
		// localStorage.setItem('LIKED_POSTS', JSON.stringify(likedPosts))
	}

	useEffect(() => {
		localStorage.setItem('LIKED_POSTS', JSON.stringify(likedPosts))
	}, [post.isLiked, post.isDisliked])

	const dislikePostHandler = () => {
		// dispatch(dislikePostAction(post.id))
		// setIsLiked(false)
		// setIsDisliked(prev => !prev)
	}

	return (
		<div className={`post post--${size}`} >
			<div className='post__inner'>
				<div className='post__info'>

					<p >{post.id}</p>


					<p className='post__date'>{post.date}</p>
					<Link
						to={`/posts/singlePage/${post.id}`}
						className='post__title'
					>
						{post.title}
					</Link>

					<p className="post__text">{post.text}</p>
				</div>
				<div className='post__photo'>
					<img src={post.image} alt={post.title} />
				</div>
				<div className='post__icons'>
					<div className="post__icons-column">

						<LikeButton clickHandler={likePostHandler} isLiked={post.isLiked} />
						<span className='post__count'>{post.likes}</span>

						<DislikeButton clickHandler={dislikePostHandler} isDisliked={post.isDisliked} />
						<span className='post__count'>{post.dislikes}</span>

					</div>
					<div className="post__icons-column">
						<img src={bookmark} alt='bookmark' />
						<img src={moreIcon} alt='moreIcon' />
					</div>
				</div>
			</div>
		</div >
	)
}

export default PostContent
import React, { ImgHTMLAttributes, useState } from 'react'
import { PostType } from '../../models'
import bookmark from '../../assets/images/Bookmark.svg'
import moreIcon from '../../assets/images/More-Horizontal.svg'
import LikeButton from '../../IU/button/LikeButton'
import DislikeButton from '../../IU/button/DislikeButton'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { dislikePostAction, likePostAction } from '../../store/posts/actions'

type PropsType = {
	post: PostType;
	size: 'small' | 'big' | 'medium'
}

const PostContent = ({ post, size }: PropsType) => {

	const [isLiked, setIsLiked] = useState(false)
	const [isDisliked, setIsDisliked] = useState(false)

	const dispatch = useDispatch<AppDispatch>()
	const likePostHandler = () => {
		dispatch(likePostAction(post.id))
		setIsDisliked(false)
		setIsLiked(prev => !prev)

	}
	const dislikePostHandler = () => {
		dispatch(dislikePostAction(post.id))
		setIsLiked(false)
		setIsDisliked(prev => !prev)

	}


	return (
		<div className={`post post--${size}`} >
			<div className='post__inner'>
				<div className='post__info'>
					<p className='post__date'>{post.date}</p>
					<h3 className='post__title'>{post.title}</h3>
					<p className="post__text">{post.text}</p>
				</div>
				<div className='post__photo'>
					<img src={post.image} alt={post.title} />
				</div>
				<div className='post__icons'>
					<div className="post__icons-column">

						<LikeButton clickHandler={likePostHandler} isLiked={isLiked} />
						<span className='post__count'>{post.likes}</span>

						<DislikeButton clickHandler={dislikePostHandler} isDisliked={isDisliked} />
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
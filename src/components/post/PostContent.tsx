import React, { ImgHTMLAttributes, useState } from 'react'
import { PostType } from '../../models'
import bookmark from '../../assets/images/Bookmark.svg'
import moreIcon from '../../assets/images/More-Horizontal.svg'
import LikeButton from '../../IU/button/LikeButton'
import DislikeButton from '../../IU/button/DislikeButton'

type PropsType = {
	post: PostType;
	size: 'small' | 'big' | 'medium'
}

const PostContent = ({ post, size }: PropsType) => {

	const [isLiked, setIsLiked] = useState(false)
	const [isDisliked, setIsDisliked] = useState(false)

	const reactionClickHandler = (r: boolean) => {
		if (r) {
			setIsLiked(prev => !prev)
			setIsDisliked(false)
		} else {
			setIsLiked(false)
			setIsDisliked(prev => !prev)
		}
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
						<LikeButton onClick={() => { reactionClickHandler(true) }} />
						{
							(isLiked)
								? <span className='post__count visible'>1</span>
								: <span className='post__count hidden'>1</span>
						}
						<DislikeButton onClick={() => { reactionClickHandler(false) }} />
						{
							(isDisliked)
								? <span className='post__count visible'>1</span>
								: <span className='post__count hidden'>1</span>
						}
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
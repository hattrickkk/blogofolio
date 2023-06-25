import React, { useEffect, useState } from 'react'
import { PostType } from '../../models'
import LikeButton from '../../IU/button/LikeButton'
import DislikeButton from '../../IU/button/DislikeButton'
import AddFavoritesButton from '../../IU/button/AddFavoritesButton'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import { removeFromLikedAction, setAsLikedAction } from '../../store/likedPosts/actions'
import { likePostAction } from '../../store/posts/actions'

type PropsType = {
	post: PostType
}

const SinglePost = ({ post }: PropsType) => {

	const [isLiked, setIsLiked] = useState(false)
	// const [isDisliked, setIsDisliked] = useState(false)
	const dispatch = useDispatch()

	const likedPosts = useSelector((state: AppState) => state.likes.list)


	useEffect(() => {
		const curPostInLikes = likedPosts.find(item => {
			if (item.id === post.id) {
				return item
			}
		})
		setIsLiked(curPostInLikes ? true : false)
	})

	useEffect(() => {
		localStorage.setItem('LIKED_POSTS', JSON.stringify(likedPosts))
	}, [isLiked])

	const clickLikeButton = () => {
		const likedPost = likedPosts.find(item => item.id === post.id)
		dispatch(likePostAction(post.id))
		if (!likedPost) {
			dispatch(setAsLikedAction(post))
		} else {
			dispatch(removeFromLikedAction(post))
		}
	}

	return (
		<div className='single-post'>
			<h2 className='single-post__title title'>{post.title}</h2>
			<div className='single-post__container'>
				<img className='single-post__image' src={post.image} alt={post.title} />
				<p className='single-post__text'>{post.text}</p>

				<p className='single-post__text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor atque omnis incidunt
					aspernatur sit odio accusantium molestias ab eveniet quidem fugiat. Temporibus dolor culpa iusto tempore esse,
					modi harum. 	Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor atque omnis incidunt
					aspernatur sit odio accusantium molestias ab eveniet quidem fugiat. Temporibus dolor culpa iusto tempore esse,
					modi harum. 	Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor atque omnis incidunt
					aspernatur sit odio accusantium molestias ab eveniet quidem fugiat. Temporibus dolor culpa iusto tempore esse,
					modi harum.
				</p>

				<div className='single-post__icons'>
					<div className='single-post__icons-reactions'>
						<LikeButton isLiked={isLiked} clickHandler={clickLikeButton} />
						<DislikeButton isDisliked={post.isDisliked} clickHandler={() => { }} />
					</div>
					<AddFavoritesButton isFavorite={post.isFavorite} clickHandler={() => { }} />
				</div>
			</div>
		</div>
	)
}

export default SinglePost

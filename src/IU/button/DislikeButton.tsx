import React from 'react'
import { createButton } from './createButton'

type Props = {
	clickHandler: () => void
	isDisliked: boolean
}
const DislikeButton = ({ clickHandler, isDisliked }: Props) => {
	return (
		<button
			className={`button dislike${isDisliked ? ' disliked' : ''}`}
			onClick={clickHandler}>
			<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M21.3665 11.424C21.2535 12.052 20.6965 12.513 20.0365 12.501H18.3665V3.501H20.0545C20.6965 3.452 21.2525 3.948 21.3665 4.577V11.424ZM16.3665 13.288L12.7585 21.406C11.9515 21.148 11.3665 20.391 11.3665 19.501V15.501C11.3665 14.948 10.9185 14.501 10.3665 14.501H4.69753C4.65153 14.498 4.59053 14.499 4.53353 14.49C3.98853 14.407 3.61253 13.896 3.69453 13.352L5.07553 4.351C5.14953 3.861 5.60153 3.522 6.08653 3.501H16.3665V13.288ZM23.3575 4.366C23.1355 2.723 21.7305 1.5 20.0945 1.5C20.0755 1.5 20.0555 1.5 20.0365 1.501H6.09753C4.61053 1.511 3.32053 2.581 3.09853 4.049L1.71753 13.051C1.47053 14.686 2.59853 16.218 4.23053 16.466C4.39053 16.491 4.55353 16.503 4.70653 16.501H9.36653V19.501C9.36653 21.707 11.1605 23.501 13.3665 23.501C13.7625 23.501 14.1195 23.268 14.2805 22.907L18.0155 14.501H20.0185C21.6885 14.506 23.1325 13.298 23.3575 11.635C23.3635 11.591 23.3665 11.546 23.3665 11.501V4.501C23.3665 4.456 23.3635 4.411 23.3575 4.366Z" fill="#313037" />
			</svg>
		</button>
	)
}


export default DislikeButton
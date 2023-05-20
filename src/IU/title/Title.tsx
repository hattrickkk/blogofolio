import React from 'react'
import './title.scss'

type PropsType = {
	text: string
	className?: string
}

const Title = ({ text, className }: PropsType) => {
	return (
		<h2
			className={(className) ? `${className} title` : 'title'}
		>
			{text}
		</h2 >
	)
}

export default Title
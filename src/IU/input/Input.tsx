import React from 'react'
import './input.scss'

type PropsType = {
	placeholder: string
	className?: string
}

const Input = ({ placeholder, className }: PropsType) => {

	const classNames: string = (className) ? `input ${className}` : `input`
	return (
		<input
			className={classNames}
			type='text'
			placeholder={placeholder}
		/>
	)
}

export default Input
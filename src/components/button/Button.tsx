import React from 'react'
import './button.scss'

type ButtonProps = {
	value: string
	disabled?: boolean
	className?: string
	type: 'primary' | 'secondary' | 'secondary2'
	onClick?: () => void
}

const Button = (props: ButtonProps) => {
	const { value, className, type, onClick, disabled } = props

	const classNames = [type, className]
	if (disabled) {
		classNames.push('disabled')
	}

	return (
		<button
			type="button"
			className={`button ${classNames.join(' ')}`}
			onClick={onClick}
			disabled={disabled}
		>
			{value}
		</button >
	)
}

export default Button
import React, { ChangeEvent } from 'react'

import './textFiels.scss'

type PropsType = {
	label: string
	placeholder: string
	name?: string
	type?: string
	error?: boolean
	onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
}


const TextField = ({ label, placeholder, onChangeHandler, name, type, error }: PropsType) => {
	const inputClassName = (error ? 'field-input input error' : 'field-input input')
	return (
		<div className='field'>
			<p className='field-label'>{label}</p>
			<input
				type={(!type) ? 'text' : type}
				name={name}
				className={inputClassName}
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		</div>
	)
}

export default TextField
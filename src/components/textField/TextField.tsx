import React, { ChangeEvent, TextareaHTMLAttributes } from 'react'

import './textFiels.scss'
import { TextChangeRange } from 'typescript'

type PropsType = {
	label: string
	placeholder: string
	name?: string
	type?: string
	error?: boolean
	onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
	textAreaChangedHandler?: (e: ChangeEvent<HTMLTextAreaElement>) => void
	isTextArea?: boolean
	className?: string
}


const TextField = ({ label, placeholder, onChangeHandler, textAreaChangedHandler, name, type, error, isTextArea, className }: PropsType) => {

	let inputClassName = (error ? 'field-input input error' : 'field-input input')

	if (className) {
		inputClassName += ' ' + className
	}

	return (
		<div className='field'>
			<p className='field-label'>{label}</p>

			{!isTextArea &&
				<input
					type={(!type) ? 'text' : type}
					name={name}
					className={inputClassName}
					placeholder={placeholder}
					onChange={onChangeHandler}
					min={type === 'number' ? 0 : undefined}
					// pattern='^[0-9]+$'
				/>
			}


			{isTextArea &&
				<textarea
					name={name}
					className={inputClassName}
					placeholder={placeholder}
					onChange={textAreaChangedHandler}
				/>
			}

		</div>
	)
}

export default TextField
import React from 'react'
import './errorLabel.scss'

type PropsType = {
	text: string[] | string
}

const ErrorLabel = ({ text }: PropsType) => {
	return (
		<p className='error-label'>
			{typeof text === 'string' ? text : text.join(' ')}
		</p>
	)
}

export default ErrorLabel
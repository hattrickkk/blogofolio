import React from 'react'
import Input from '../../IU/input/Input'

type PropsType = {
	label: string
	placeholder: string
}


const TextField = ({ label, placeholder }: PropsType) => {
	return (
		<div className='field'>
			<p className='field-label'>{label}</p>
			<Input
				className='field-input'
				placeholder={placeholder}
			/>
		</div>
	)
}

export default TextField
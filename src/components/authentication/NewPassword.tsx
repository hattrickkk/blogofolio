import React from 'react'
import './auth.scss'
import TextField from '../textField/TextField'
import PrimaryButton from '../../IU/button/PrimaryButton'

const NewPassword = () => {
	return (
		<div className='new-password__inner-box inner-box'>
			<div className="new-password__fields fields">
				<TextField label='Password' placeholder='Your password' />
				<TextField label='Confirm password' placeholder='Confirm password' />
			</div>

			<PrimaryButton className='new-password__button' value='Set Password' />
		</div>
	)
}

export default NewPassword
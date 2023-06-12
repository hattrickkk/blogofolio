import React from 'react'
import './auth.scss'
import TextField from '../textField/TextField'
import PrimaryButton from '../../IU/button/PrimaryButton'

const ResetPassword = () => {
	return (
		<div className='reset-password__inner-box inner-box'>
			<div className="reset-password__fields fields">
				<TextField label='Email' placeholder='Your Email' />
			</div>

			<PrimaryButton className='reset-password__button' value='Reset' />
		</div>
	)
}

export default ResetPassword
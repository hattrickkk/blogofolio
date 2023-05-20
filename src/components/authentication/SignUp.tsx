import React from 'react'
import TextField from '../textField/TextField'
import { Link } from 'react-router-dom'

import './auth.scss'
import PrimaryButton from '../../IU/button/PrimaryButton'

const SignUp = () => {
	return (
		<div className='sign-up_inner-box inner-box'>
			<div className='sign-up__fields fields'>
				<TextField label='Name' placeholder='Your name' />
				<TextField label='Email' placeholder='Your email' />
				<TextField label='Password' placeholder='Your password' />
				<TextField label='Confirm password' placeholder='Confirm password' />
			</div>

			<PrimaryButton value='Sign Up' className='sign-up__button' />
			<p className='sign-up__label-link label-link'>
				Already have an account? 
				<Link to={'/sign-in'}> Sign In</Link>
			</p>
		</div>
	)
}

export default SignUp
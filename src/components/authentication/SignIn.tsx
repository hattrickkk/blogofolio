import React from 'react'
import TextField from '../textField/TextField'
import { Link } from 'react-router-dom'

import './auth.scss'
import PrimaryButton from '../../IU/button/PrimaryButton'

const SignIn = () => {
	return (
		<div className='sign-in_inner-box inner-box'>
			<div className='sign-in__fields fields'>
				<TextField label='Email' placeholder='Your email' />
				<TextField label='Password' placeholder='Your password' />
			</div>

			<Link
				to='/reset-password'
				className='sign-in__link link'
			>
				Forgot password?
			</Link>

			<PrimaryButton value='Sign In' className='sign-in__button' />
			<p className='sign-in__label-link label-link'>
				Don’t have an account?
				<Link to={'/sign-up'}> Sign Up</Link>
			</p>
		</div>
	)
}

export default SignIn
import React from 'react'
import Title from '../IU/title/Title'
import SignIn from '../components/authentication/SignIn'
import BackHome from '../IU/backHome/BackHome'

const SignInPage = () => {
	return (
		<div className='sign-in'>
			<div className='container'>
				<BackHome />
				<Title text='Sign In' className='sign-in__title' />
				<SignIn />
			</div>
		</div>
	)
}

export default SignInPage
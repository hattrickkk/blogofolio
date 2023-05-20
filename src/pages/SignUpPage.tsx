import React from 'react'
import Title from '../IU/title/Title'
import BackHome from '../IU/backHome/BackHome'
import SignUp from '../components/authentication/SignUp'

const SignUpPage = () => {
	return (
		<div className='sign-up'>
			<div className='container'>
				<BackHome />
				<Title text='Sign Up' className='sign-up__title' />
				<SignUp />
			</div>
		</div>
	)
}

export default SignUpPage
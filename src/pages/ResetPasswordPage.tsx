import React from 'react'
import Title from '../IU/title/Title'
import BackHome from '../IU/backHome/BackHome'
import ResetPassword from '../components/authentication/ResetPassword'


const ResetPasswordPage = () => {
	return (
		<div className='reset-password'>
			<div className='container'>
				<BackHome />
				<Title text='Reset password' className='reset-password__title' />
				<ResetPassword />
			</div>
		</div>
	)
}

export default ResetPasswordPage
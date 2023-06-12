import React from 'react'
import Title from '../IU/title/Title'
import BackHome from '../IU/backHome/BackHome'
import NewPassword from '../components/authentication/NewPassword'


const NewPasswordPage = () => {
	return (
		<div className='new-password'>
			<div className='container'>
				<BackHome />
				<Title text='New password' className='new-password__title' />
				<NewPassword />
			</div>
		</div>
	)
}

export default NewPasswordPage
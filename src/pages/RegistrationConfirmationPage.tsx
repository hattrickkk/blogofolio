import React from 'react'
import Title from '../IU/title/Title'
import BackHome from '../IU/backHome/BackHome'
import RegistartionConfirmation from '../components/authentication/RegistartionConfirmation'

const RegistrationConfirmationPage = () => {
	return (
		<div className='reg-confirmation'>
			<div className='container'>
				<BackHome />
				<Title text='Registration Confirmation' className='reg-confirmation__title' />
				<RegistartionConfirmation />
			</div>
		</div>
	)
}

export default RegistrationConfirmationPage
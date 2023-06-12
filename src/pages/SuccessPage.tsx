import React from 'react'
import Title from '../IU/title/Title'
import BackHome from '../IU/backHome/BackHome'
import RegistartionConfirmation from '../components/authentication/RegistartionConfirmation'
import Success from '../components/authentication/Success'

const SuccessPage = () => {
	return (
		<div className='success'>
			<div className='container'>
				<BackHome />
				<Title text='Success' className='success__title' />
				<Success />
			</div>
		</div>
	)
}

export default SuccessPage
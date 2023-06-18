import React, { useEffect } from 'react'
import Title from '../IU/title/Title'
import BackHome from '../IU/backHome/BackHome'
import RegistartionConfirmation from '../components/authentication/RegistartionConfirmation'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activationAction } from '../store/activation/actions'
import { AppDispatch, AppState } from '../store'
import { useSelector } from 'react-redux'

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
import React, { useCallback } from 'react'

import PrimaryButton from '../../IU/button/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import { json } from 'stream/consumers'
import ErrorLabel from '../errorLabel/ErrorLabel'

const RegistartionConfirmation = () => {

	const location = useLocation()
	const navigate = useNavigate()

	const goToHomeClick = useCallback(() => {
		navigate('/', { replace: true })
	}, [])



	const user = useSelector((state: AppState) => state.registration.user)

	return (
		<div className='reg-confirmation_inner-box inner-box'>
			<p className='reg-confirmation__text text'>
				Please activate your account with the activation
				link in the email <span>{location.state}</span>. Please, check your email
			</p>


			{JSON.stringify(user)}

			<PrimaryButton
				value='Go to home'
				className='reg-confirmation__button'
				onClick={goToHomeClick}
			/>
		</div>
	)
}

export default RegistartionConfirmation
import React, { useCallback } from 'react'

import PrimaryButton from '../../IU/button/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'

const RegistartionConfirmation = () => {

	const location = useLocation()
	const navigate = useNavigate()

	const goToHomeClick = useCallback(() => {
		navigate('/', { replace: true })
	}, [])

	return (
		<div className='reg-confirmation__inner-box inner-box'>
			<p className='reg-confirmation__text text'>
				Please activate your account with the activation
				link in the email <span>{location.state}</span>. Please, check your email
			</p>

			<PrimaryButton
				value='Go to home'
				className='reg-confirmation__button'
				onClick={goToHomeClick}
			/>
		</div>
	)
}

export default RegistartionConfirmation
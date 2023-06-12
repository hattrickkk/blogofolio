import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../IU/button/PrimaryButton'

import './auth.scss'

const Success = () => {
	const navigate = useNavigate()

	const goToHomeClick = useCallback(() => {
		navigate('/', { replace: true })
	}, [])


	return (
		<div className='success__inner-box inner-box'>

			<p className='success__text text'>
				Email confirmed.
				Your registration is now completed
			</p>

			<PrimaryButton
				value='Go to home'
				className='success__button'
				onClick={goToHomeClick}
			/>
		</div>
	)
}

export default Success
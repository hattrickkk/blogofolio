import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, AppState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { activationAction } from '../store/activation/actions'
import ErrorLabel from '../components/errorLabel/ErrorLabel'
import BackHome from '../IU/backHome/BackHome'
import RegistartionConfirmation from '../components/authentication/RegistartionConfirmation'
import Title from '../IU/title/Title'

const ActivationPage = () => {

	const { uid, token } = useParams()
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	useEffect(() => {
		const navFunc = () => {
			navigate('/success')
		}
		if (uid && token) {
			dispatch(activationAction(uid, token, navFunc))
		}

	}, [uid, token])


	const errors = useSelector((state: AppState) => state.activation.errors)
	const activationErrors = errors ? Object.values(errors) : undefined


	return (
		<>
			<div className='reg-confirmation'>
				<div className='container'>
					<BackHome />
					<Title text='Account activation' className='account-activation__title' />
				</div>
			</div>
			{activationErrors && (<ErrorLabel text={activationErrors as (string | string[])} />)}
			<div>activationPage</div>

		</>
	)
}

export default ActivationPage
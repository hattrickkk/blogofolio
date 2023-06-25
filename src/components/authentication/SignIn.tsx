import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import TextField from '../textField/TextField'
import { Link, useNavigate } from 'react-router-dom'

import './auth.scss'
import PrimaryButton from '../../IU/button/PrimaryButton'
import { ValidationError } from 'fastest-validator'
import FastestValidator from "fastest-validator"
import { getSignInValidationObj } from '../../helpers/getSignInValidationObj'
import { ErrorMessageType, FormErrorsType } from '../../models'
import ErrorLabel from '../errorLabel/ErrorLabel'
import { useDispatch } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { authAction, clearAuthStoreAction } from '../../store/auth/actions'
import { useSelector } from 'react-redux'

type FormType = {
	email: string
	password: string
}
const SignIn = () => {

	const v = new FastestValidator();
	const check = v.compile({
		email: "string",
		password: "string",
	})

	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const errorsFromAuth = useSelector((state: AppState) => state.auth.errors)

	useEffect(() => {
		dispatch(clearAuthStoreAction())
	}, [])


	const [form, setForm] = useState<FormType>({
		email: '',
		password: ''
	} as FormType)
	const [formErrors, setFormErrors] = useState<FormErrorsType>({})


	const inputChangeHnadler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const onFormSubmit = (e: FormEvent) => {

		e.preventDefault()
		setFormErrors({})
		const { email, password } = form

		const validationObject = getSignInValidationObj(email, password)
		const checkResult = check(validationObject)

		if (checkResult === true) {
			dispatch(authAction(email, password, () => navigate('/', { replace: true })))
		}
		else {
			const errors = checkResult as ValidationError[]
			setFormErrors(errors.reduce((total, item) => {
				total[item.field] = item.message
				return total
			}, {} as any) as FormErrorsType)
		}
	}


	return (
		<div className='sign-in__inner-box inner-box'>
			<form action="" onSubmit={onFormSubmit}>
				<div className='sign-in__fields fields'>
					<TextField
						label='Email'
						placeholder='Your email'
						name='email'
						type='email'
						onChangeHandler={inputChangeHnadler}
					/>
					{
						formErrors.email &&
						<ErrorLabel text={formErrors.email} />
					}
					{
						errorsFromAuth &&
						<ErrorLabel text={Object.values(errorsFromAuth).join(' ')} />
					}

					<TextField
						label='Password'
						placeholder='Your password'
						name='password'
						type='password'
						onChangeHandler={inputChangeHnadler}
					/>
					{
						formErrors.password &&
						<ErrorLabel text={formErrors.password} />
					}
				</div>

				<Link
					to='/reset-password'
					className='sign-in__link link'
				>
					Forgot password?
				</Link>

				<PrimaryButton value='Sign In' className='sign-in__button' />
				<p className='sign-in__label-link label-link'>
					Don’t have an account?
					<Link to={'/sign-up'}> Sign Up</Link>
				</p>
			</form>
		</div>
	)
}

export default SignIn
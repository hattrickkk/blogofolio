import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import TextField from '../textField/TextField'
import { Link, useNavigate } from 'react-router-dom'
import './auth.scss'
import PrimaryButton from '../../IU/button/PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { registrationAction } from '../../store/registration/actions'
// import { useSelector } from 'react-redux'
import ErrorLabel from '../errorLabel/ErrorLabel'
import FastestValidator from "fastest-validator"
import { ValidationError } from 'fastest-validator'
import { ErrorMessageType } from '../../models'

type FormType = {
	username: string
	email: string
	password: string
	confirmPassword: string
}
type FormErrorsType = Partial<Record<keyof FormType, string | string[]>>

const SignUp = () => {
	const v = new FastestValidator();
	const check = v.compile({
		username: "string",
		email: "string",
		password: "string",
		confirmPassword: "string"
	})

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const errors = useSelector((state: AppState) => state.registration.errors)

	useEffect(() => {
		if (errors) {
			if (typeof errors === 'object') {
				setFormErrors(errors)
			}
		}
		// else {
		// 	// нужно ли сюда закидывать строку....
		// }
	}, [errors])

	const [form, setForm] = useState<FormType>({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const [formErrors, setFormErrors] = useState<FormErrorsType>({})

	const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}, [form])


	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { username, email, password, confirmPassword } = form
		setFormErrors({})

		// const checkResult = check(form)

		// if (checkResult === true) {
		if (password && confirmPassword && (password !== confirmPassword)) {
			setFormErrors({
				...formErrors,
				confirmPassword: 'The entered passwords do not match.'
			})
		}

		const regSuccessFunc = () => navigate('/registration-confirmation', {
			replace: true,
			state: email
		})
		if (username && email && password && (password === confirmPassword)) {
			dispatch(registrationAction(username, email, password, regSuccessFunc))
		}
		else {
			setFormErrors({
				username: 'заполните',
				password: 'заполните',
				confirmPassword: 'заполните',
				email: 'заполниет'
			})
		}


		// }
		// else {
		// 	const validationErrors = checkResult as ValidationError[]
		// 	console.log(validationErrors)
		// }

	}


	return (
		<div className='sign-up_inner-box inner-box'>
			<form action="" onSubmit={onFormSubmit}>
				<div className='sign-up__fields fields'>
					<TextField
						error={formErrors.username ? true : false}
						label='Name'
						placeholder='Your name'
						name='username'
						onChangeHandler={inputChangeHandler}
					/>
					{
						formErrors.username &&
						<ErrorLabel text={formErrors.username} />
					}

					<TextField
						error={formErrors.email ? true : false}
						label='Email'
						placeholder='Your email'
						name='email'
						type='email'
						onChangeHandler={inputChangeHandler}
					/>
					{
						formErrors.email &&
						<ErrorLabel text={formErrors.email} />
					}

					<TextField
						error={formErrors.password ? true : false}
						label='Password'
						placeholder='Your password'
						name='password'
						type='password'
						onChangeHandler={inputChangeHandler}
					/>
					{
						formErrors.password &&
						<ErrorLabel text={formErrors.password} />
					}

					<TextField
						error={formErrors.confirmPassword ? true : false}
						label='Confirm password'
						placeholder='Confirm password'
						name='confirmPassword'
						type='password'
						onChangeHandler={inputChangeHandler}
					/>
					{
						formErrors.confirmPassword &&
						<ErrorLabel text={formErrors.confirmPassword} />
					}
				</div>

				<PrimaryButton
					value='Sign Up'
					className='sign-up__button'
					type='submit'
				/>

				<p className='sign-up__label-link label-link'>
					Already have an account?
					<Link to={'/sign-in'}> Sign In</Link>
				</p>
			</form>
		</div>
	)
}

export default SignUp
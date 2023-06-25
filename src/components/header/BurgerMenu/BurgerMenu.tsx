import React, { useRef } from 'react'
import UserComponent from '../UserComponent'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { setDarkThemeAtcion, setLightThemeAction } from '../../../store/theme/actions'
import { useSelector } from 'react-redux'
import { authAction } from '../../../store/auth/actions'
import { authSelector } from '../../../store/auth/selectors'
import { Link } from 'react-router-dom'

type Props = {
	className?: string
}

const BurgerMenu = ({ className }: Props) => {

	const dispath = useDispatch<AppDispatch>()
	const authState = useSelector(authSelector)


	const changeTheme = (theme: string) => {
		theme === 'light'
			? dispath(setLightThemeAction())
			: dispath(setDarkThemeAtcion())
	}

	const classNames = ['header__menu menu']
	if (className) {
		classNames.push(className)
	}

	return (
		<div className={classNames.join(' ')}>
			{authState.isAuth && <UserComponent userName='Darya Khitrik' />}
			<div className="menu__items">
				<button onClick={() => changeTheme('dark')}>dark</button>
				<br />
				<button onClick={() => changeTheme('light')}>light</button>

				<Link to={'/create-post'}>Add Post</Link>
			</div>
		</div >
	)
}

export default BurgerMenu


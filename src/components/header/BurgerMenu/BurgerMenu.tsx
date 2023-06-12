import React, { useRef } from 'react'
import UserComponent from '../UserComponent'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { setDarkThemeAtcion, setLightThemeAction } from '../../../store/theme/actions'

type Props = {
	className?: string
}

const BurgerMenu = ({ className }: Props) => {

	const dispath = useDispatch<AppDispatch>()

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
			{(true) && <UserComponent userName='Darya Khitrik' />}
			<div className="menu__items">
				<button onClick={() => changeTheme('dark')}>dark</button>
				<br />
				<button onClick={() => changeTheme('light')}>light</button>
			</div>
		</div >
	)
}

export default BurgerMenu


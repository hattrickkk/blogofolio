import React, { useRef } from 'react'
import UserComponent from '../UserComponent'

type Props = {
	className: string
}

const BurgerMenu = ({ className }: Props) => {
	const classNames = ['header__menu menu']
	if (className) {
		classNames.push(className)
	}

	return (
		<div className={classNames.join(' ')}>
			{(true) && <UserComponent userName='Darya Khitrik' />}
			<div className="menu__items">

			</div>
		</div >
	)
}

export default BurgerMenu


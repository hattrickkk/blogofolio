import React, { useRef, useState } from 'react'
import BurgerButton from './BurgerButton'

import './header.scss'
import UserIconComponent from './iconComponents/UserIconComponent'
import UserComponent from './UserComponent'
import Search from './Search'
import BurgerMenu from './BurgerMenu/BurgerMenu'



const Header = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const burgerButtonRef = useRef<HTMLDivElement>(null)
	const burgerBtnClick = () => {
		burgerButtonRef.current?.classList.toggle('active')
		setIsOpen(prev => !prev)
	}

	return (
		<div className='header'>
			<div className='container1920'>
				<div className='header__inner'>
					<BurgerButton
						onCLick={burgerBtnClick}
						reff={burgerButtonRef}
					/>
					<Search />

					{(true)
						? <UserIconComponent />
						: <UserComponent userName='Darya Khitrik' />
					}

				</div>
				<BurgerMenu
					className={(isOpen) ? 'open' : 'close'}
				/>
			</div>
		</div>
	)
}

export default Header
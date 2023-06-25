import React, { useRef, useState } from 'react'
import BurgerButton from './BurgerButton'

import './header.scss'
import UserComponent from './UserComponent'
import Search from './search/Search'
import BurgerMenu from './BurgerMenu'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import UnauthorizedUserComponent from './UnauthorizedUserComponent'
import { authSelector } from '../../store/auth/selectors'



const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const authState = useSelector(authSelector)

	return (
		<div className='header'>
			<div className='container1920'>
				<div className='header__inner'>
					<BurgerButton
						onCLick={() => { setIsOpen(prev => !prev) }}
						clasName={isOpen ? 'active' : ''}
					/>
					<Search />

					{!authState.isAuth
						? <UnauthorizedUserComponent />
						: <UserComponent userName='Darya hitrik' />
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
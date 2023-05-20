import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import './layout.scss'

const Layout = () => {
	return (
		<div className='page'>
			<Header />

			<div className='outlet'>
				<Outlet />
			</div>

			<Footer />
		</div>
	)
}

export default Layout
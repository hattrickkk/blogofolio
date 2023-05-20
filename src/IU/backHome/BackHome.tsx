import React from 'react'
import { Link } from 'react-router-dom'
import './backHome.scss'

const BackHome = () => {
	return (
		<Link
			to={'/'}
			className='back-home'
		>
			Back to home
		</Link>
	)
}

export default BackHome
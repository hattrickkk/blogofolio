import React, { useEffect } from 'react'
import Title from '../../IU/title/Title'
import Tabs from '../../components/tabs/tabs'
import './homePage.scss'

const HomePage = () => {
	return (
		<div className='home-page'>
			<div className='container'>
				<Title text='Blog' className='home-page__title' />
				<Tabs />
			</div>
		</div>
	)
}

export default HomePage
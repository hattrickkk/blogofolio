import React, { useState } from 'react'
import TabHeader from './TabHeader'
import './tabs.scss'
import TabContent from './TabContent'
import TabsContextProvider from './TabsContextProvider'

const Tabs = () => {
	return (
		<TabsContextProvider>
			<div className='tabs'>
				<TabHeader />
				<TabContent />
			</div>
		</TabsContextProvider>
	)
}

export default Tabs
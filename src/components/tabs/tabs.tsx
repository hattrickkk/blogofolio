import React, { useState } from 'react'
import TabHeader from './TabHeader'
import './tabs.scss'
import TabContent from './TabContent'
import TabsContextProvider from './TabsContextProvider'

const Tabs = () => {
	return (
		<TabsContextProvider>
			<div className='tabs'>
				<div className="container">
					<TabHeader />
					<TabContent />
				</div>
			</div>
		</TabsContextProvider>
	)
}

export default Tabs
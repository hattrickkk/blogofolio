import React from 'react'
import TabContentItem from './TabContentItem'
import Posts from '../post/Posts'

const TabContent = () => {
	return (
		<div className='tabs__container'>

			<TabContentItem index={0}>
				1
				< Posts />
			</TabContentItem>
			<TabContentItem index={1}>
				2
				<Posts />
			</TabContentItem>
			<TabContentItem index={2}>
				3
				<Posts />
			</TabContentItem>
		</div >
	)
}

export default TabContent
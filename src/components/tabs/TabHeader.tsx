import React, { useContext } from 'react'
import TabTitleItem from './TabTitleItem'


const TabHeader = () => {
	const arrOfTitles: string[] = ['All', 'My favorites', 'Popular']

	return (
		<div className='tabs__header'>
			<ul className='tabs__menu'>
				{arrOfTitles.map((elem, i) => {
					return <TabTitleItem key={i} text={elem} index={i} />
				})}
			</ul>
		</div >
	)
}

export default TabHeader
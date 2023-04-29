import React, { useContext } from 'react'
import { TabsContext } from './TabsContextProvider'

type Props = {
	children: React.ReactNode
	index: number
}

const TabContentItem = ({ children, index }: Props) => {
	const { value } = useContext(TabsContext)

	return (
		<div
			className={(value === index) ? "tabs__content active" : "tabs__content"}
		>
			{children}
		</div>
	)
}

export default TabContentItem
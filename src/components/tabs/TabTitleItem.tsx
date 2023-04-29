import React, { useContext } from 'react'
import { TabsContext } from './TabsContextProvider'

type Props = {
	text: string
	index: number
}

const TabTitleItem = ({ index, text }: Props) => {
	const { value, setValue } = useContext(TabsContext)
	const toggleIndex = (index: number) => {
		setValue(index)
	}

	return (
		<li
			onClick={() => { toggleIndex(index) }}
			className={(value === index) ? `tabs__item active` : `tabs__item`}
		>
			{text}
		</li>
	)
}

export default TabTitleItem
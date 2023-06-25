import React from 'react'
type PropsType = {
	children: React.ReactNode
	isActive: boolean
	onClick: () => void
}
const ThemeButton = ({ children, isActive, onClick }: PropsType) => {
	return (
		<button
			className={isActive ? 'theme-btn active' : 'theme-btn'}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default ThemeButton
import React, { LegacyRef } from 'react'

type Props = {
	onCLick: () => void
	clasName: string
}

const BurgerButton = ({ clasName, onCLick }: Props) => {
	return (
		<div
			onClick={onCLick}
			className={clasName ? 'header__burger-button active' : 'header__burger-button'}
		>
			<span></span>
		</div>
	)
}

export default BurgerButton
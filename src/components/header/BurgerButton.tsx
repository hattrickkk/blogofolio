import React, { LegacyRef } from 'react'

type Props = {
	onCLick: () => void
	reff: null | LegacyRef<HTMLDivElement>
}

const BurgerButton = ({ reff, onCLick }: Props) => {
	return (
		<div
			onClick={onCLick}
			ref={reff}
			className='header__burger-button'
		>
			<span></span>
		</div>
	)
}

export default BurgerButton
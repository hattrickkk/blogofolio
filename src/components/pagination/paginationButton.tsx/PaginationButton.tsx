import React from 'react'

type TypeProps = {
	type: 'next' | 'prev'
}

const PaginationButton = (props: TypeProps) => {

	const className = `pagination__button pagination__button--${props.type}`

	return (
		<a
			href='#'
			className={className}
		>
			<span>{props.type}</span>
		</a >
	)
}

export default PaginationButton
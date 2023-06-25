import React, { ChangeEvent } from 'react'

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	value?: string
}

const SearchInput = ({ onChange, value }: Props) => {
	return (
		<input
			onChange={onChange}
			type="text"
			className='search__input'
			placeholder='Search...'
			value={value}
		/>
	)
}

export default SearchInput
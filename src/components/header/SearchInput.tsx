import React, { FormEvent, LegacyRef } from 'react'

type Props = {
	onChange: (e: FormEvent<HTMLInputElement>) => void
	reff: null | LegacyRef<HTMLInputElement>
	value?: string
}

const SearchInput = ({ reff, onChange, value }: Props) => {
	return (
		<input
			onChange={onChange}
			ref={reff}
			type="text"
			className='search__input'
			placeholder='Search...'
			value={value}
		/>
	)
}

export default SearchInput
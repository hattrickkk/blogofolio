import React, { FormEvent, useEffect, useRef, useState } from 'react'
import SearchIconComponent from './iconComponents/SearchIconComponent'
import SearchInput from './SearchInput'


const Search = () => {

	const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true)
	const [inputValue, setInputValue] = useState<string>('')

	const searchInputRef = useRef<HTMLInputElement>(null)
	const searchRef = useRef<HTMLDivElement>(null)

	const searchInputChange = (e: FormEvent<HTMLInputElement>) => {
		(searchInputRef.current?.value === '') ? setIsInputEmpty(true) : setIsInputEmpty(false)
		setInputValue(e.currentTarget.value)
	}

	const seacrhBtnClick = () => {
		searchRef.current?.classList.toggle('active')
	}

	const deleteTextSearchClick = () => {
		setInputValue('')
		setIsInputEmpty(true)
	}

	return (
		<div className='header__search search'>
			<div className='search__inner'>
				<div
					className='search__field'
					ref={searchRef}
				>
					<SearchInput
						value={inputValue}
						onChange={searchInputChange}
						reff={searchInputRef}
					/>
					<div
						onClick={deleteTextSearchClick}
						className='search__button-del'
						style={{ display: (isInputEmpty) ? 'none' : 'block' }}
					></div>
				</div>
				<SearchIconComponent
					onClick={seacrhBtnClick}
					className='search-btn'
				/>
			</div>
		</div >
	)
}

export default Search
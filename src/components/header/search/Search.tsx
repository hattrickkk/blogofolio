import React, { ChangeEvent, useState } from 'react'
import SearchIconComponent from './SearchIconComponent'
import SearchInput from './SearchInput'


const Search = () => {
	const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true)
	const [inputValue, setInputValue] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const searchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		(e.target.value === '') ? setIsInputEmpty(true) : setIsInputEmpty(false)
		setInputValue(e.currentTarget.value)
	}

	const deleteTextSearchClick = () => {
		setInputValue('')
		setIsInputEmpty(true)
	}

	const searchClick = () => {
		if (isOpen) {
			// навигейт ту поиск педж??
		}

		setIsOpen(prev => !prev)
		// console.log(isOpen)
	}

	return (
		<div className='header__search search'>
			<div className='search__inner'>
				<div
					className={isOpen ? 'search__field active' : 'search__field'}
				>
					<SearchInput
						value={inputValue}
						onChange={searchInputChange}
					/>
					<div
						onClick={deleteTextSearchClick}
						className='search__button-del'
						style={{ display: (isInputEmpty) ? 'none' : 'block' }}
					></div>
				</div>
				<SearchIconComponent
					onClick={searchClick}
				/>
			</div>
		</div >
	)
}

export default Search
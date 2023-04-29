import React from 'react'
import PaginationButton from './PaginationButton'
import './Pagination.scss'

const Pagination = () => {
	return (
		<div className='pagination'>
			<PaginationButton type='next' />
			<PaginationButton type='prev' />
		</div>
	)
}

export default Pagination
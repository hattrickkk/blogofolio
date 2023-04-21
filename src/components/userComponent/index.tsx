import React from 'react'
import './userComponent.scss'

type UserComponentType = {
	userName: string
}

const UserComponent = ({ userName }: UserComponentType) => {
	const iconUserName = userName
		.split(' ')
		.map(elem => elem[0])
		.join('')
		.toUpperCase()

	return (
		<div className='userComponent'>
			<div className='iconUserName'>{iconUserName}</div>
			<p className='userName'>{userName}</p>
		</div>
	)
}

export default UserComponent
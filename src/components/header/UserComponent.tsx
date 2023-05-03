import React from 'react'

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
		<div className='header__userComponent'>
			<div className='iconUserName'>{iconUserName}</div>
			<p className='userName'>{userName}</p>
		</div>
	)
}

export default UserComponent
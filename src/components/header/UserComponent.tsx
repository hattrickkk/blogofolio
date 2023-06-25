import React from 'react'

type UserComponentType = {
	userName: string
}

const UserComponent = ({ userName }: UserComponentType) => {
	const iconName = userName.split(' ').length > 1
		? userName.split(' ').map(elem => elem[0])
			.join('')
			.toUpperCase()
		: (userName[0] + userName[1]).toUpperCase()

	return (
		<div className='header__userComponent'>
			<div className='iconUserName'>{iconName}</div>
			<p className='userName'>{userName}</p>
		</div>
	)
}

export default UserComponent
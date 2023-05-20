
import { Link } from 'react-router-dom'

type Props = {
	className?: string
	onClick?: () => void
}

export const createIconComponent = (pic: string, type: string) => {

	const IconComponent = ({ className, onClick }: Props) => {
		const nameOfClass = (!className) ? 'icon-component' : `icon-component ${className}`
		return (
			<Link
				to={'/sign-in'}
				className={nameOfClass}
				onClick={onClick}
			>
				<img
					src={pic}
					alt={`${type} icon`}
				/>
			</Link >
		)
	}

	return IconComponent
}
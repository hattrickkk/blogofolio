import './button.scss'

type TypeBtn = 'primary' | 'secondary2' | 'secondary' | 'like' | 'dislike'

type PropsType = {
	value?: string
	onClick?: () => void
	disabled?: boolean
	className?: string
}

export const createButton = (type: TypeBtn) => {

	const Button = (props: PropsType) => {

		const classNames = [props.className, type]
		if (props.disabled) {
			classNames.push('disabled')
		}

		return (
			<button
				disabled={props.disabled}
				className={`button ${classNames.join(' ')}`}
				onClick={props.onClick}
			>
				{props.value}
			</button>
		)
	}

	return Button
}
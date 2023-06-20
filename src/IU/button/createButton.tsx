import './button.scss'

type TypeBtn = 'primary' | 'secondary2' | 'secondary' 

type PropsType = {
	value?: string
	onClick?: () => void
	disabled?: boolean
	className?: string
	type?: 'button' | 'reset' | 'submit'
}

export const createButton = (type: TypeBtn) => {

	const Button = (props: PropsType) => {

		const classNames: string[] = [type]
		if (props.className) {
			classNames.push(props.className)
		}
		if (props.disabled) {
			classNames.push('disabled')
		}

		return (
			<button
				disabled={props.disabled}
				type={props.type}
				className={`button ${classNames.join(' ')}`}
				onClick={props.onClick}
			>
				{props.value}
			</button>
		)
	}

	return Button
}
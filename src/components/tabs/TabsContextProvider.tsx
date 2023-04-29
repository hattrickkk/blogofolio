import React, { SetStateAction, createContext, useState } from "react";

type ContextType = {
	value: number
	setValue: React.Dispatch<SetStateAction<number>>
}

export const TabsContext = createContext<ContextType>({} as ContextType)


type Props = {
	children: React.ReactNode
}
const TabsContextProvider = ({ children }: Props) => {
	const [state, setState] = useState(0)

	const providerObject: ContextType = {
		value: state,
		setValue: setState
	}

	return (
		< TabsContext.Provider value={providerObject} >
			{children}
		</TabsContext.Provider >
	)
}

export default TabsContextProvider
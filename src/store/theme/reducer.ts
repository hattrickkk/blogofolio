import { ThemeActionType, ThemeStateType } from "./types";


const initValue: ThemeStateType = {
	theme: 'light'
}

export const themeReducer = (state: ThemeStateType = initValue, action: ThemeActionType): ThemeStateType => {
	switch (action.type) {
		case 'SET_LIGHT':
			return {
				...state,
				theme: 'light'
			}
		case 'SET_DARK':
			return {
				...state,
				theme: 'dark'
			}
		default:
			return state
	}
}
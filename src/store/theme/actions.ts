import { ThemeActionType } from "./types";

export const setLightThemeAction = (): ThemeActionType => {
	return {
		type: 'SET_LIGHT'
	}
}

export const setDarkThemeAtcion = (): ThemeActionType => {
	return {
		type: 'SET_DARK'
	}
}
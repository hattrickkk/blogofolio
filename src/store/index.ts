import { configureStore, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { postsReducer } from "./posts/reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { regReducer } from "./registration/reducer";
import { activationReducer } from "./activation/reducer";
import { likeReducer } from "./likedPosts/reducer";


const rootReducer = combineReducers({
	themeReducer: themeReducer,
	posts: postsReducer,
	likes: likeReducer,
	registration: regReducer,
	activation: activationReducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>


// export type AppThunk<ReturnType = void> = ThunkAction<
// 		ReturnType,
// 		AppState,
// 		unknown,
// 		Action<string>
// 	>	
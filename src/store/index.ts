import { configureStore, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { themeReducer } from "./theme/reducer";
import { postsReducer } from "./posts/reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { regReducer } from "./registration/reducer";
import { activationReducer } from "./activation/reducer";
import { likeReducer } from "./likedPosts/reducer";
import { authReducer } from "./auth/reducer";
import { createPostValidationReducer } from "./postCreateValidation/reducer";

// для persist
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
	themeReducer: themeReducer,
	posts: postsReducer,
	likes: likeReducer,
	registration: regReducer,
	activation: activationReducer,
	auth: authReducer,
	createPostValidation: createPostValidationReducer
})


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)




const store = configureStore({
	reducer: persistedReducer,
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(thunkMiddleware)

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(thunkMiddleware)
})

export const persistor = persistStore(store)
export default store;

// const store = configureStore({
// 	reducer: persistReducer
// 	// middleware: (getDefaultMiddleware) =>
// 	// 	getDefaultMiddleware().concat(thunkMiddleware)
// })


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>



// const store = configureStore({
// 	reducer: persistReducer
// 	// middleware: (getDefaultMiddleware) =>
// 	// 	getDefaultMiddleware().concat(thunkMiddleware)
// })

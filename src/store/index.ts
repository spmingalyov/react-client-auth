import { configureStore } from '@reduxjs/toolkit'

import pushReducer from './push/pushSlice'
import userReducer from './user/userSlice'

const store = configureStore({
	reducer: {
		user: userReducer,
		push: pushReducer
	},
	devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

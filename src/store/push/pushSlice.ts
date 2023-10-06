import { createSlice } from '@reduxjs/toolkit'

interface IPushState {
	isPush: boolean | undefined
}
const initialState: IPushState = {
	isPush: false
}

const userSlice = createSlice({
	name: 'push',
	initialState,
	reducers: {
		push: state => {
			state.isPush = true
		},
		setDelivered: state => {
			state.isPush = false
		}
	}
})

export const { push, setDelivered } = userSlice.actions

export default userSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getLocalStorage } from '@utils/storage'

import { IRegistrationCred, IUserCredentials, IUserState } from './types'

const initialState: IUserState = {
	isLoading: false,
	user: getLocalStorage('user'),
	isError: null,
	isRegistered: false
}

//simulated login request
export const login = createAsyncThunk(
	'user/login',
	async (userCredentials: IUserCredentials) => {
		const response = await fetch(
			'http://localhost:3000/react-client-auth/users.json'
		).then(response => response.json())

		const currentUser = response.findIndex(
			(user: IUserCredentials) =>
				user.email === userCredentials.email &&
				user.password === userCredentials.password
		)

		if (currentUser !== -1) {
			localStorage.setItem('user', JSON.stringify(response[currentUser]))
			return response[currentUser]
		}

		return null
	}
)

//simulated registration request
export const registration = createAsyncThunk(
	'user/registration',
	async (userCredentials: IRegistrationCred) => {
		const response = await fetch(
			'http://localhost:3000/react-client-auth/users.json'
		).then(response => response.json())

		const currentUser = response.findIndex(
			(user: IUserCredentials) => user.email === userCredentials.email
		)

		if (currentUser !== -1) {
			return 'Пользователь с таким логином уже зарегистрирован'
		}

		if (userCredentials.password !== userCredentials.checkPassword) {
			return 'Введенные пароли не совпадают'
		}

		return null
	}
)

//logout method
export const logout = createAsyncThunk('user/logout', async userCredentials => {
	localStorage.clear()
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.isLoading = true
				state.user = null
				state.isError = null
			})

			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload

				if (action.payload === null) {
					state.isError = 'Имя пользователя или пароль введены не верно'
				}
			})

			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
				state.isError = 'Имя пользователя или пароль введены не верно'
			})

			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
				state.isError = null
			})

			.addCase(registration.fulfilled, (state, action) => {
				if (action.payload) {
					state.isError = action.payload
				} else {
					state.isRegistered = true
				}
			})
	},
	reducers: {}
})

export default userSlice.reducer

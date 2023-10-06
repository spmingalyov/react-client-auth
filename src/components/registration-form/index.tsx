import { FC, useState } from 'react'

import AuthSwitch from '@components/auth-switch'
import ErrorMessage from '@components/error-message'
import Submit from '@components/submit-button'

import { registration } from '@store/user/userSlice'

import { useAppDispatch, useAppSelector } from '@hooks/redux'

const RegistrationForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [checkPassword, setCheckPassword] = useState<string>('')

	const { isError } = useAppSelector(state => state.user)

	const dispatch = useAppDispatch()

	const handleLoginEvent = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		let userCredentials = {
			name,
			email,
			password,
			checkPassword
		}
		dispatch(registration(userCredentials))
	}
	return (
		<div className='flex flex-col items-center'>
			<form
				className='p-5 bg-secondary inline-flex flex-col gap-3 rounded-xl items-center'
				onSubmit={handleLoginEvent}
			>
				<input
					required
					className='p-3 w-96 rounded-md'
					type='text'
					placeholder='Введите имя пользователя'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					required
					className='p-3 w-96 rounded-md'
					type='email'
					placeholder='Введите email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					required
					className='p-3 w-96 rounded-md'
					type='password'
					placeholder='Введите пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<input
					required
					className='p-3 w-96 rounded-md'
					type='password'
					placeholder='Введите пароль'
					value={checkPassword}
					onChange={e => setCheckPassword(e.target.value)}
				/>
				<Submit typeAuth='registration' />
				<AuthSwitch />
			</form>
			{isError && <ErrorMessage />}
		</div>
	)
}

export default RegistrationForm

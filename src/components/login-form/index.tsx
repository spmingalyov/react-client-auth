import { FC, useState } from 'react'

import AuthSwitch from '@components/auth-switch'
import ErrorMessage from '@components/error-message'
import Submit from '@components/submit-button'

import { login } from '@store/user/userSlice'

import { useAppDispatch, useAppSelector } from '@hooks/redux'

const LoginForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { isError } = useAppSelector(state => state.user)

	const dispatch = useAppDispatch()

	const handleLoginEvent = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		let userCredentials = {
			email,
			password
		}
		dispatch(login(userCredentials))
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
				<Submit typeAuth='login' />
				<AuthSwitch />
			</form>

			{isError && <ErrorMessage />}
		</div>
	)
}

export default LoginForm

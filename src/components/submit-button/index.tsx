import { FC } from 'react'

import { push } from '@store/push/pushSlice'

import { useAppDispatch, useAppSelector } from '@hooks/redux'

interface ISubmit {
	typeAuth: string
}

const Submit: FC<ISubmit> = ({ typeAuth }) => {
	const { isLoading } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	return (
		<button
			className='bg-primary border-none w-full mt-2'
			type='submit'
			onClick={typeAuth === 'login' ? () => dispatch(push()) : () => {}}
			disabled={isLoading}
		>
			{typeAuth === 'login' ? 'Войти' : 'Зарегистрироваться'}
		</button>
	)
}

export default Submit

import { FC } from 'react'
import { BiUserCircle } from 'react-icons/bi'

import Push from '@components/push'

import { setDelivered } from '@store/push/pushSlice'

import { withAuthProvider } from '@helpers/auth'

import { useAppDispatch, useAppSelector } from '@hooks/redux'

const ProfilePage: FC = () => {
	const dispatch = useAppDispatch()
	const { isPush } = useAppSelector(state => state.push)
	const { user } = useAppSelector(state => state.user)

	//delivered push logic
	const interval = setInterval(() => dispatch(setDelivered()), 6000)
	setTimeout(() => clearInterval(interval), 6000)

	return (
		<>
			<div className='absolute top-6'>{isPush && <Push />}</div>

			<div className='p-5 bg-secondary inline-flex flex-col gap-3 rounded-xl items-center w-96 h-96'>
				<div className='font-bold'>Привет, {user?.name}!</div>
				<BiUserCircle className='text-8xl' />
				<div>Username: {user?.username}</div>
				<div>Email: {user?.email}</div>
				<div>Website: {user?.website}</div>
			</div>
		</>
	)
}

export default withAuthProvider(ProfilePage)

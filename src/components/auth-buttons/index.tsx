import { FC } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'

import { logout } from '@store/user/userSlice'

import { useAppDispatch } from '@hooks/redux'
import { useAuth } from '@hooks/useAuth'

const AuthButtons: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const isAuth = useAuth()

	const handleLogout = () => {
		dispatch(logout())
		navigate('/login')
	}

	return isAuth ? (
		<div className='flex gap-2'>
			{location.pathname !== '/profile' && (
				<button onClick={() => navigate('/profile')}>
					<FaUserAlt />
				</button>
			)}
			<button onClick={handleLogout}>
				<TbLogout2 className='text-2xl' />
			</button>
		</div>
	) : (
		<>
			{location.pathname === '/login' && (
				<button onClick={() => navigate('/registration')}>Регистрация</button>
			)}
			{location.pathname === '/registration' && (
				<button onClick={() => navigate('/login')}>Вход</button>
			)}
			{location.pathname === '/' && (
				<div className='flex gap-2'>
					<button onClick={() => navigate('/login')}>Вход</button>
					<button onClick={() => navigate('/registration')}>Регистрация</button>
				</div>
			)}
		</>
	)
}

export default AuthButtons

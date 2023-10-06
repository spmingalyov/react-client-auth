import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const AuthSwitch: FC = () => {
	const location = useLocation()
	return (
		<>
			{location.pathname === '/login' && (
				<span className='flex gap-2'>
					Нет аккаунта?
					<Link to='/registration?'>Зарегистрироватьвся</Link>
				</span>
			)}

			{location.pathname === '/registration' && (
				<span className='flex gap-2'>
					Уже есть аккаунт?
					<Link to='/login?'>Войти</Link>
				</span>
			)}
		</>
	)
}

export default AuthSwitch
